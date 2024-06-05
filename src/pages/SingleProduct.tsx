import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { getSProduct } from "../redux/productSlice";
import { FiStar } from "react-icons/fi";
import { url } from "inspector";

export const SingleProduct: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams<{ id: string | undefined }>();
  useEffect(() => {
    if (id) {
      dispatch(getSProduct(id));
    }
  }, [dispatch, id]);

  const selectedProduct = useSelector(
    (state: RootState) => state.products.selectedProduct
  );

  if (!id||!selectedProduct) {
    return <div className="container mx-auto p-4">
    <div className="w-3/4 m-auto ">
          <img
            className="m-auto"
            src="https://www.lifecoachhub.com/files/images/no-product-found.png"
            alt="No Product"
          />
        </div>
        <Link to="/"><h3 className="text-center text-lg mt-4 font-bold text-cyan-800">Back To Home Page</h3></Link>
    </div>;
  }

  return (
    <div className="w-full p-4 mt-4 ">
      <div className=" w-3/4 m-auto mt-6 py-6 shadow-shadBo rounded-xl bg-cover bg-center" style={{backgroundImage:"url(https://img6.thuthuatphanmem.vn/uploads/2022/03/15/mau-background-dep-cho-card-visit_092710350.png)"}}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row -mx-4">
                <div className="md:flex-1 px-4">
                  
                  <div
            className="overflow-hidden cursor-pointer rounded-xl relative group"
        >
       
            <img
                
                className="object-cover w-full h-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                src={selectedProduct?.thumbnail} alt="pro"/>
                <div
                      className="absolute w-1/5 bottom-[5%] p-0 opacity-70 text-black rounded-xl"
                      
                    >
                      {selectedProduct?.availabilityStatus === "In Stock"?<img className="w-3/4 m-auto" src="https://cdn-icons-png.flaticon.com/512/5278/5278681.png" alt="available"/>:<img src="https://cdn-icons-png.flaticon.com/512/5278/5278580.png" alt="outofstock"/>}
                    </div>
        
        </div>
                  <div className="flex -mx-2 mb-4 mt-4">
                    <div className="w-1/2 px-2 m-auto mt-3">
                      <Link to={`/product/${selectedProduct?.id}/edit`}>
                        <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                          Edit
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="md:flex-1 px-4">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                    {selectedProduct?.title}
                  </h2>
                  <p className="text-gray-600 text-md">
                    {`(${selectedProduct?.category})`}
                  </p>
                  {selectedProduct?.brand ? (
                    <p className="text-gray-600 text-lg font-bold">
                      Brand: {selectedProduct?.brand}
                    </p>
                  ) : (
                    ""
                  )}
                  <div className="w-2/5 flex justify-start text-grey-600 rounded-lg mt-2 p-1.5 dark:text-gray-300 text-sm font-bold mb-1">
                    <FiStar className="mt-1"/> <h5> Rating: {selectedProduct?.rating} </h5> <FiStar className="mt-1"/>
                  </div>
                  <div className="p-3">
                    {selectedProduct?.tags?.map((el) => (
                      <span
                        key={el}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                      >
                        {el}
                      </span>
                    ))}
                  </div>

                  <div className="flex mb-4">
                    <div className="mr-4">
                      <span className="font-bold text-gray-700 dark:text-gray-300">
                        Price:
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">
                        ${selectedProduct?.price}
                      </span>
                    </div>
                    <div>
                      <span className="font-bold text-gray-700 dark:text-gray-300">
                        Weight:
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">
                        {selectedProduct?.weight} kg
                      </span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      Dimensions (w/h/d) (in cm):
                    </span>
                    <div className="flex items-center mt-2">
                      <div className="w-9 h-8 p-1 flex justify-center items-center bg-red-500 mr-2 rounded-lg text-sm font-semi-bold hover:scale-125 tranisition ease-in-out">
                        <span className="p-0.5">
                          {selectedProduct?.dimensions.width}
                        </span>
                      </div>
                      <div className="w-9 h-8 p-1 flex justify-center items-center bg-blue-300 rounded-lg mr-2 text-sm font-semi-bold hover:scale-125 tranisition ease-in-out">
                        <span className="p-0.5">
                          {selectedProduct?.dimensions.height}
                        </span>
                      </div>
                      <div className="w-9 h-8 p-1 flex justify-center items-center bg-yellow-500 rounded-lg mr-2 text-sm font-semi-bold hover:scale-125 tranisition ease-in-out">
                        <span className="p-0.5">
                          {selectedProduct?.dimensions.depth}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      Info:
                    </span>
                    <div className="flex items-center mt-2">
                      <div className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                        {selectedProduct?.shippingInformation}
                      </div>
                      <div className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                        {selectedProduct?.warrantyInformation}
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      Product Description:
                    </span>
                    <p className="text-gray-600 dark:text-gray-300 text-md font-semibold mt-2">
                      {selectedProduct?.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
