import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from 'api/axiosConfig'
import { TAuth } from './type'

const initialState: TAuth = {
  data: [],
  loading: false,
  error: null,
}

export const registrationUser = createAsyncThunk('auth/reguser', async (formData : any ) => {
  try {
    console.log( typeof formData)
    const response = await api.post(`/v2/auth/register`, {
      telephone: formData.telephone,
      email: formData.email,
      firstname: formData.name,
      ip: "127.0.0.1",
      device: "Test",
      password: formData.password,
      password_confirmation: formData.password,
      term: true,
  })

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
        localStorage.setItem('userData', JSON.stringify(action.payload));

      })
      .addCase(registrationUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || { message: 'Failed to reg in' };
      })
  },
})

export { registrationSlice }
