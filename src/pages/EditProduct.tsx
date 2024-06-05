import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { AppDispatch, RootState } from '../redux/store';
import { Product } from '../interfaces/product';
import { getSProduct, updatePro } from '../redux/productSlice';

export const EditProduct: React.FC<{}> = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const { id } = useParams<{ id: string | undefined }>();
    const [pro, setPro] = useState<Product | undefined>(undefined);

    const selectedProduct = useSelector(
      (state: RootState) => state.products.selectedProduct
    );

    useEffect(() => {
        if (id) {
            dispatch(getSProduct(id));
        }
    }, [dispatch, id]);

    useEffect(() => {
        if (selectedProduct) {
            setPro(selectedProduct);
        }
    }, [selectedProduct]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setPro((prevProduct) => prevProduct ? { ...prevProduct, [name]: value } : undefined);
    };

    const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPro((prevPro) => prevPro ? { ...prevPro, [name]: parseFloat(value) } : undefined);
    };

    const handleNestedChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        field: 'dimensions'
    ) => {
        const { name, value } = e.target;
        setPro((prevPro) => prevPro ? ({
            ...prevPro,
            [field]: {
                ...prevPro[field],
                [name]: parseFloat(value)
            }
        }) : undefined);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (pro) {
            dispatch(updatePro(pro));
            navigate("/");
        }
    };

  return (
    <div className="w-3/4 m-auto p-4">
      <h1 className=" text-2xl text-center font-bold mb-4">Edit Product</h1>
     {pro? <form onSubmit={handleSubmit} className="container mx-auto p-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
        <input name="title" value={pro?.title} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
      </div>
      
      <div className="flex justify-between items-center">
      <div className="w-2/5 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Category</label>
        <input name="category" value={pro?.category} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
      </div>
      <div className="w-2/5 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Brand</label>
        <input name="brand" value={pro?.brand} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      </div>
      
      <div className="flex justify-between items-center">
      <div className="w-2/5 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Price</label>
        <input name="price" type="number" value={pro?.price} onChange={handleNumberChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="w-2/5 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Discount Percentage</label>
        <input name="discountPercentage" type="number" value={pro?.discountPercentage} onChange={handleNumberChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      </div>
      <div className="flex justify-between items-center">
      <div className="w-2/5 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Rating</label>
        <input name="rating" type="number" value={pro?.rating} onChange={handleNumberChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
      </div>
      <div className="w-2/5 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Availability Status</label>
        <input name="availabilityStatus" value={pro?.availabilityStatus} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
      </div>
      </div>
      <div className="flex justify-between items-center">
      <div className="w-2/5 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Tags</label>
        <input name="tags" value={pro?.tags.join(", ")} onChange={(e) => setPro({ ...pro, tags: e.target.value.split(", ") })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
      </div>
      
      <div className=" w-2/5 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Weight</label>
        <input name="weight" type="number" value={pro?.weight} onChange={handleNumberChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
      </div>

      </div>
      
    
      
      <div className="flex justify-between items-center">
      <div className="w-2/5 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Warranty Information</label>
        <input name="warrantyInformation" value={pro?.warrantyInformation} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
      </div>
      <div className="w-2/5 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Shipping Information</label>
        <input name="shippingInformation" value={pro?.shippingInformation} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
      </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Dimensions</label>
        <div className="flex space-x-4">
          <input name="width" type="number" value={pro?.dimensions.width} onChange={(e) => handleNestedChange(e, 'dimensions')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Width" required />
          <input name="height" type="number" value={pro?.dimensions.height} onChange={(e) => handleNestedChange(e, 'dimensions')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Height" required/>
          <input name="depth" type="number" value={pro?.dimensions.depth} onChange={(e) => handleNestedChange(e, 'dimensions')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Depth" required/>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
        <textarea name="description" value={pro?.description} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Thumbnail URL</label>
        <input name="thumbnail" value={pro?.thumbnail} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
      </div>
      <div className="flex items-center justify-between">
        <button type="submit" className="bg-black hover:bg-grey-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Update Product
        </button>
      </div>
    </form>:""}
    </div>
  );
}