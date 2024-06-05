import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { Link } from 'react-router-dom';
import { RootState, AppDispatch } from "../redux/store";
import { getProducts, selectAllProducts } from "../redux/productSlice";
import Pagination from "../components/Pagination";
import { SearchBar } from "../components/SearchBar";
import { Product } from "../interfaces/product";
import { Link } from "react-router-dom";

const ProductList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector(selectAllProducts);
  const productStatus = useSelector(
    (state: RootState) => state.products.isLoading
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const productsPerPage = 8;

  useEffect(() => {
    if (productStatus === true) {
      dispatch(getProducts());
    }
  }, [productStatus, dispatch]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Calculate current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(products.length / productsPerPage);

  const filteredProducts = currentProducts.filter((product: Product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="w-[90%] m-auto">
      <SearchBar Value={searchQuery} OnChange={handleSearchChange} />
      {filteredProducts.length > 0 ? (
        <div className="p-1 m-auto grid grid-cols-1 auto-rows-auto lg:grid-cols-4 md:grid-cols-2">
          {filteredProducts?.map((el, index) => {
            return (
              <Link to={`/product/${el.id}`} key={el.id}>
                <div
                  
                  className="bg-white flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-lg group p-2"
                >
                  <svg
                    className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
                    viewBox="0 0 375 283"
                    fill="none"
                    style={{ opacity: "0.1" }}
                  >
                    <rect
                      x="159.52"
                      y="175"
                      width="152"
                      height="152"
                      rx="8"
                      transform="rotate(-45 159.52 175)"
                      fill={index % 2 === 0 ? "blue" : "red"}
                    />
                    <rect
                      y="107.48"
                      width="152"
                      height="152"
                      rx="8"
                      transform="rotate(-45 0 107.48)"
                      fill={index % 2 === 0 ? "green" : "yellow"}
                    />
                  </svg>
                  <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div
                      className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                      style={{
                        background: "radialGradient(black, transparent 60%)",
                        transform:
                          "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                        opacity: "0.2",
                      }}
                    ></div>
                    <span className="block opacity-75 -mb-1 text-black font-bold text-lg pl-2">
                      {el.title}
                    </span>
                    <img className="relative w-40" src={el.thumbnail} alt="" />
                  </div>
                  <div className="relative px-6 pb-6 mt-6">
                    <div className="flex justify-between">
                      <span className="block text-black">{el.category}</span>
                      <span className=" bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                        $ {el.price}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="w-3/4 m-auto ">
          <img
            className="m-auto"
            src="https://www.lifecoachhub.com/files/images/no-product-found.png"
            alt="No Product"
          />
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ProductList;
