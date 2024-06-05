import React from "react";

interface SearchBarProps {
  Value: string;
  OnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const SearchBar: React.FC<SearchBarProps> = ({ Value, OnChange }) => {
  return (
    <>
      <div className="m-auto p-3 mt-4 flex justify-between items-center text-gray-600 border-2 border-gray-300 rounded-lg">
        <input
          className=" bg-white rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
          value={Value}
          onChange={OnChange}
        />
        <svg
          className="text-gray-600 h-4 w-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 56.966 56.966"
          width="7rem"
          height="7rem"
        >
          <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
        </svg>
      </div>
    </>
  );
};
