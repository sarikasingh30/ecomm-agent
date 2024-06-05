import React from "react";
import { Product } from "../interfaces/product";
interface ProductProps {
  prod: Product;
  index: number;
}

export const SingleProCard: React.FC<ProductProps> = ({ prod, index }) => {

  return (
    <>
      <div className="bg-white flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-lg group p-2">
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
              transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
              opacity: "0.2",
            }}
          ></div>
          <span className="block opacity-75 -mb-1 text-black font-bold text-lg pl-2">
            {prod.title}
          </span>
          <img className="relative w-40" src={prod.thumbnail} alt="" />
        </div>
        <div className="relative px-6 pb-6 mt-6">
          <div className="flex justify-between">
            <span className="block text-black">{prod.category}</span>
            <span className=" bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
              $ {prod.price}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
