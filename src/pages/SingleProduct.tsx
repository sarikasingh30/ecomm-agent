import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { getSProduct } from "../redux/productSlice";

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

  if (!id) {
    return <div className="container mx-auto p-4">Invalid product ID</div>;
  }
  // console.log(selectedProduct)

  return (
    <div className="w-full p-4 mt-4">
      <div className="w-3/4 m-auto mt-6 py-6 shadow-shadBo bg-cyan-100 rounded-xl">
     

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row -mx-4">
                <div className="md:flex-1 px-4">
                  <div className="relative h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4 hover:scale-110 transition ease-in-out duration-150">
                    <img
                      className="w-full h-full object-cover border-2 rounded-lg opacity-75 hover:opacity-100 "
                      src={selectedProduct?.thumbnail}
                      alt="Product"
                    />
                    <div
                      className="absolute w-full bottom-[5%] p-0 opacity-50"
                      style={{
                        backgroundColor:
                          selectedProduct?.availabilityStatus === "In Stock"
                            ? "green"
                            : "red",
                      }}
                    >
                      {"...."}
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
                  <p className="text-gray-600text-sm">
                    {selectedProduct?.category}
                  </p>
                      {selectedProduct?.brand?<p className="text-gray-600 text-lg font-bold">
                    Brand: {selectedProduct?.brand}
                  </p>:""}
                  <span className="text-gray-600 rounded-lg mt-2 p-1.5 dark:text-gray-300 text-sm font-bold mb-1 bg-yellow-200">
                    Rating: {selectedProduct?.rating}
                  </span>
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
                      <div className="w-9 h-8 p-1 flex justify-center items-center bg-red-500 dark:bg-red-700 mr-2 text-sm font-semi-bold">
                        <span className="p-0.5">
                          {selectedProduct?.dimensions.width}
                        </span>
                      </div>
                      <div className="w-9 h-8 p-1 flex justify-center items-center bg-blue-300 dark:bg-blue-500 mr-2 text-sm font-semi-bold">
                        <span className="p-0.5">
                          {selectedProduct?.dimensions.height}
                        </span>
                      </div>
                      <div className="w-9 h-8 p-1 flex justify-center items-center bg-yellow-500 dark:bg-yellow-700 mr-2 text-sm font-semi-bold">
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
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
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
