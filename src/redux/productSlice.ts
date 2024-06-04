
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchProducts } from '../api/api';
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

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    selectProduct: (state, action: PayloadAction<Product>) => {
      state.selectedProduct = action.payload;
    }
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
      });
  },
});

export const { selectProduct } = productSlice.actions;

export const selectAllProducts = (state: RootState) => state.products.items;
export const selectProductById = (state: RootState, productId:string) =>
  state.products.items.find((product:Product) => product.id === productId);

export default productSlice.reducer;
