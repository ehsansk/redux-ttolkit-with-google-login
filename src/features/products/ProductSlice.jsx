import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    productData: [],
    loading: false,
    error: null,
  };

  export const FetchAllProduct = createAsyncThunk(
    "product/allProduct",
    async ()=>{
        try {
           const  response= await axios.get('https://dummyjson.com/products');
           console.log('response->',response)
           return response.data.products;
        } catch (error) {
            throw error;
        }
    }
  )

  const productData =createSlice({
    name: 'allProduct',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(FetchAllProduct.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(FetchAllProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.productData = action.payload;
          })
          .addCase(FetchAllProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          });
      },
  })

  export default productData.reducer;