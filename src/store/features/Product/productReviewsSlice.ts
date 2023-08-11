import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from 'api/axiosConfig'
import { TProduct } from './type'

const initialState: TProduct = {
  data: [],
  loading: false,
  error: null,
}

export const fetchProductReviewsById = createAsyncThunk('product/fetchProductReviewsById', async (productID: number) => {
  try {
    const response = await api.get(`/v1/products/reviews/${productID}`)
    
    return response.data
  } catch (err) {
    throw Error('Failed to get  product reviews data')
  }
})





const productReviews = createSlice({
  name: ' product reviews',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProductReviewsById.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchProductReviewsById.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchProductReviewsById.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'failed to fetch  product reviews'
      })
  },
})

export { productReviews};
