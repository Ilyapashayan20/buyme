import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from 'api/axiosConfig'
import { TAuth } from './type'

const initialState: TAuth = {
  data: [],
  loading: false,
  error: null,
}

export const registrationUser = createAsyncThunk('auth/reguser', async (formData: object) => {
  try {
    const response = await api.post(`/v2/auth/register`, formData)

    return response.data
  } catch (err) {
    throw Error('Failed to registration user')
  }
})

const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registrationUser.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(registrationUser.fulfilled, (state, action) => {
        state.loading = false,
        state.data=action.payload
      })
      .addCase(registrationUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || { message: 'Failed to reg in' }
      })
  },
})

export { registrationSlice }
