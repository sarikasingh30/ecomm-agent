import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { Link } from 'react-router-dom';
import { RootState, AppDispatch } from "../redux/store";
import { getProducts, selectAllProducts } from "../redux/productSlice";
import Pagination from "../components/Pagination";
import { SearchBar } from "../components/SearchBar";
import { Product } from "../interfaces/product";
import { Link } from "react-router-dom";
import { SingleProCard } from "../components/SingleProCard";

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
    <>
      {productStatus ? (
        <div className="w-full h-screen flex flex-row justify-center items-center">
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-warning motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      ) : (
        <div className="w-[90%] m-auto">
          <SearchBar Value={searchQuery} OnChange={handleSearchChange} />
          {filteredProducts.length > 0 ? (
            <div className="p-1 m-auto grid grid-cols-1 auto-rows-auto lg:grid-cols-4 md:grid-cols-2">
              {filteredProducts?.map((el, index) => {
                return (
                  <Link to={`/product/${el.id}`} key={el.id}>
                    <SingleProCard prod={el} index={index} />
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
      )}
    </>
  );
};

export default ProductList;
