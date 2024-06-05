import axios from 'axios';
import { Product } from '../interfaces/product';

const API_URL = 'http://localhost:8080/products';
// const API_URL = 'https://ecomm-backend-api.onrender.com/products';

export const fetchProducts = async ()=> {
  const response = await axios.get(API_URL);
  return response.data;
};


export const fetchSingleProduct=async(id:string|undefined): Promise<any>=>{
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data; // Assuming the response contains the product data
      } catch (error) {
        // Handle errors
        console.error('Error fetching single product:', error);
        throw error;
      }
}

export const createProduct=async(product:Product): Promise<any>=>{
    try {
        const response = await axios.post(API_URL, product);
        return response.data;
      } catch (error) {
        // Handle errors
        console.error('Error create product:', error);
        throw error;
      }
}

export const updateProduct=async(product:Product): Promise<any>=>{
    try {
        const response = await axios.put(`${API_URL}/${product.id}`, product);
        return response.data;
      } catch (error) {
        // Handle errors
        console.error('Error create product:', error);
        throw error;
      }
}