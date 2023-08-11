import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from 'api/axiosConfig'
import { TCategory } from './type'

const initialState: TCategory = {
  data: [],
  loading: false,
  error: null,
}

export const fetchCategoryData = createAsyncThunk('category/fetchCategoryData', async () => {
  try {
    const response = await api.get('/v1/categories/root-parents')

    return response.data
    
  } catch (err) {
    throw Error('Failed to get category data')
  }
});

export const fetchCategoryTreeData  = createAsyncThunk('category/fetchCategoryTreeData', async () => {
  try {
    const response = await api.get('/v1/categories/tree')

    return response.data
    
  } catch (err) {
    throw Error('Failed to get category tree data')
  }
});


const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCategoryData.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchCategoryData.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchCategoryData.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'failed to fetch category'
      })
  },
});

const categoryTreeSlice = createSlice({
  name: 'category tree',
  initialState,
  reducers:{},
  extraReducers: builder => {
    builder
      .addCase(fetchCategoryTreeData.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchCategoryTreeData.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchCategoryTreeData.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'failed to fetch category tree'
      })
  },
})

export  { categorySlice, categoryTreeSlice}
