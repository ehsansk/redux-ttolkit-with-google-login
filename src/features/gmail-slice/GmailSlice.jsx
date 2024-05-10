import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  gmailData: [],
  loading: false,
  error: null,
};

export const fetchDataFromApi = createAsyncThunk(
  'gmaildata/fetchData',
  async () => {
    try {
      // Make your API call using Axios here
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      return response.data; // Adjust this according to your API response
    } catch (error) {
      throw error;
    }
  }
);

// Define the slice
const gmailSlice = createSlice({
    name: 'gmail-data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchDataFromApi.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchDataFromApi.fulfilled, (state, action) => {
          state.loading = false;
          state.gmailData = action.payload;
        })
        .addCase(fetchDataFromApi.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  

export default gmailSlice.reducer;
