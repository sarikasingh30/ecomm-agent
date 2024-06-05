
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createProduct, fetchProducts, fetchSingleProduct, updateProduct } from '../api/api';
import { RootState } from '../redux/store';
import { Product, ProductState } from '../interfaces/product';



const initialState: ProductState = {
    items: [],
    isLoading: true,
    isError:false
    
};

export const getProducts = createAsyncThunk('products/getProducts', async () => {
  const products = await fetchProducts();
  return products;
});
export const getSProduct = createAsyncThunk('products/getSProduct', async (id:string|undefined) => {
    const product = await fetchSingleProduct(id); 
  return product;
  });

  export const createPro = createAsyncThunk(
    "products/createProduct",
    async (product:Product) => {
      const pro=await createProduct(product);
      return pro
    }
  );
  export const updatePro = createAsyncThunk(
    "products/updateProduct",
    
    async (product:Product) => {
      const { id, ...data } = product;
      if (!id) throw new Error('Product id is required');
      const updatedPro=await updateProduct(product)
      return updatedPro
    }
  );

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading=true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading=false;
        state.items = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      }).addCase(getSProduct.fulfilled, (state, action) => {
        state.isLoading=false;
        state.selectedProduct= action.payload;
      })
      .addCase(createPro.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updatePro.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (product) => product.id === action.payload._id
        );
        state.items[index] = action.payload;
      })
  },
});



export const selectAllProducts = (state: RootState) => state.products.items;
export const selectProductById = (state: RootState, productId:string) =>
  state.products.items.find((product:Product) => product.id === productId);

export default productSlice.reducer;
