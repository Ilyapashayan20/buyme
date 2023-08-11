import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from 'api/axiosConfig'
import { TSlice } from '../type'

const initialState: TSlice = {
  data: [],
  loading: false,
  error: null,
}

export const fetchWatchList = createAsyncThunk('product/fetchWatchList', async () => {
  try {
    const response = await api.get('/v1/products/wishlist')
    
    return response.data
  } catch (err) {
    throw Error('Failed to get  watch list ')
  }
})


export const addWatchList = createAsyncThunk('product/addWatchList', async (productId:any) => {
    try {
      const response = await api.post(`/v1/products/wishlist/${productId}`);
      
      return response.data;

    } catch (err) {
      throw new Error('Failed to add watch list');
    }
  });



export const removeWatchList = createAsyncThunk('product/removeWatchList', async (productId:any) => {
    try {
      const response = await api.delete(`/v1/products/wishlist/${productId}`);
      
      return response.data;
      
    } catch (err) {
      throw new Error('Failed to remove watch list');
    }
  });



const watchlist = createSlice({
  name: ' watchlist',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchWatchList.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchWatchList.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchWatchList.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'failed to fetch  watchlist '
      })
  },
})

export { watchlist};
