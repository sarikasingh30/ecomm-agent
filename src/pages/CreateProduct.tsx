import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Product } from "../interfaces/product";
import { AppDispatch } from "../redux/store";
import { createPro } from "../redux/productSlice";
import {v4 as uuidv4} from "uuid"

export const CreateProduct: React.FC = () => {
    const navigate=useNavigate()
    const dispatch = useDispatch<AppDispatch>();
    const [pro, setPro] = useState<Product>({
      id: "",
      title: "",
      description: "",
      category: "",
      price: 0,
      discountPercentage: 10,
      rating: 0,
      tags: [],
      brand: "",
      weight: 1,
      dimensions: {
        width: 23.17,
        height: 14.43,
        depth: 28.01,
      },
      warrantyInformation: "1 month warranty",
      shippingInformation: "Ships in 1 month",
      availabilityStatus: "In Stock",
      thumbnail: ""
    });
  

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setPro((prevPro) => ({ ...prevPro, [name]: value }));
      };
    
      const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPro((prevPro) => ({ ...prevPro, [name]: parseFloat(value) }));
      };
    
      const handleNestedChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        field: 'dimensions'
      ) => {
        const { name, value } = e.target;
        setPro((prevPro) => ({
          ...prevPro,
          id:uuidv4(),
          [field]: {
            ...prevPro[field],
            [name]: parseFloat(value)
          }
        }));
      };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createPro(pro))
    navigate("/")
  };

  return (
    <div className="w-full m-auto p-4 bg-cover bg-center bg-opacity-30" style={{backgroundImage:"url(https://www.pngkey.com/png/full/951-9515208_business-card-background-black-and-white-visiting-images.png)"}} >
      <h1 className="text-4xl text-center font-bold mb-4 text-black bg-white">Create Product</h1>
      <form onSubmit={handleSubmit} className="w-3/4 m-auto mx-auto p-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
        <input name="title" value={pro.title} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
      </div>
      
      <div className="flex justify-between items-center">
      <div className="w-2/5 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Category</label>
        <input name="category" value={pro.category} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
      </div>
      <div className="w-2/5 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Brand</label>
        <input name="brand" value={pro.brand} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      </div>
      
      <div className="flex justify-between items-center">
      <div className="w-2/5 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Price</label>
        <input name="price" type="number" value={pro.price} onChange={handleNumberChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="w-2/5 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Discount Percentage</label>
        <input name="discountPercentage" type="number" value={pro.discountPercentage} onChange={handleNumberChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      </div>
      <div className="flex justify-between items-center">
      <div className="w-2/5 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Rating</label>
        <input name="rating" type="number" value={pro.rating} onChange={handleNumberChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
      </div>
      <div className="w-2/5 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Availability Status</label>
        <input name="availabilityStatus" value={pro.availabilityStatus} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
      </div>
      </div>
      <div className="flex justify-between items-center">
      <div className="w-2/5 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Tags</label>
        <input name="tags" value={pro.tags.join(", ")} onChange={(e) => setPro({ ...pro, tags: e.target.value.split(", ") })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
      </div>
      
      <div className=" w-2/5 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Weight</label>
        <input name="weight" type="number" value={pro.weight} onChange={handleNumberChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
      </div>

      </div>
      
    
      
      <div className="flex justify-between items-center">
      <div className="w-2/5 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Warranty Information</label>
        <input name="warrantyInformation" value={pro.warrantyInformation} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
      </div>
      <div className="w-2/5 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Shipping Information</label>
        <input name="shippingInformation" value={pro.shippingInformation} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
      </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Dimensions (width/height/depth)(in cm)</label>
        <div className="flex space-x-4">
          <input name="width" type="number" value={pro.dimensions.width} onChange={(e) => handleNestedChange(e, 'dimensions')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Width" required />
          <input name="height" type="number" value={pro.dimensions.height} onChange={(e) => handleNestedChange(e, 'dimensions')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Height" required/>
          <input name="depth" type="number" value={pro.dimensions.depth} onChange={(e) => handleNestedChange(e, 'dimensions')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Depth" required/>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2 bg-white">Description</label>
        <textarea name="description" value={pro.description} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2 bg-white">Thumbnail URL</label>
        <input name="thumbnail" value={pro.thumbnail} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
      </div>
      <div className="flex items-center justify-between">
        <button type="submit" className="bg-black hover:bg-grey-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Create Product
        </button>
      </div>
    </form>
    </div>
  );
};
