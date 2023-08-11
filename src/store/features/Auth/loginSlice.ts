import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from 'api/axiosConfig'
import { TAuth } from './type'

const initialState: TAuth = {
  data: null,
  loading: false,
  error: null,
}

export const loginUser = createAsyncThunk('auth/loginuser', async (formData: object) => {
  try {
    const response = await api.post(`/v2/auth/login`, formData)

    return response.data
  } catch (err) {
    throw new Error('Failed to login user')
  }
})

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
        state.error = null 
        localStorage.setItem('userData', JSON.stringify(action.payload));

      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to log in';
        state.data = null;
      })
      
  },
})

export { loginSlice}
