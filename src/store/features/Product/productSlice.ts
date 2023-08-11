import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from 'api/axiosConfig'
import { TProduct } from './type'

const initialState: TProduct = {
  data: [],
  loading: false,
  error: null,
}

export const fetchNewProductsData = createAsyncThunk('product/fetchNewProductsData', async () => {
  try {
    const response = await api.get('/v1/products')

    return response.data
  } catch (err) {
    throw Error('Failed to get new products data')
  }
})

export const fetchProductById = createAsyncThunk('product/fetchProductById', async (productID: number) => {
  try {
    const response = await api.get(`/v1/products/${productID}/details`)

    return response.data
  } catch (err) {
    throw Error('Failed to get  product data')
  }
})

export const fetchStockProductsData = createAsyncThunk('product/fetchStockProductsData', async () => {
    try {
      const response = await api.get('/v1/products/special')
  
      return response.data
    } catch (err) {
      throw Error('Failed to get stock products data')
    }
  })

const productById = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProductById.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'failed to fetch  product'
      })
  },
})

const stockProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: builder => {
      builder
        .addCase(fetchStockProductsData.pending, state => {
          state.loading = true
          state.error = null
        })
        .addCase(fetchStockProductsData.fulfilled, (state, action) => {
          state.loading = false
          state.data = action.payload
        })
        .addCase(fetchStockProductsData.rejected, (state, action) => {
          state.loading = false
          state.error = action.error.message || 'failed to fetch  product'
        })
    },
  })


const newProductSlice = createSlice({
  name: 'new product',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchNewProductsData.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchNewProductsData.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchNewProductsData.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'failed to fetch new products'
      })
  },
})

export { newProductSlice, productById,stockProductSlice };
