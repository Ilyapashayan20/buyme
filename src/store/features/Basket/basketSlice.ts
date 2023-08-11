import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from 'api/axiosConfig'
import { TSlice } from '../type'

const initialState: TSlice = {
  data: [],
  loading: false,
  error: null,
}

export const fetchBasketList = createAsyncThunk('/fetchBasketList', async () => {
  try {
    const response = await api.get('/v2/cart')
    
    return response
  } catch (err) {
    throw Error('Failed to get  basket list ')
  }
})


export const addBasket = createAsyncThunk('product/addBasket', async (options:any) => {
    try {
      const response = await api.post(`/v2/cart`, options);
      
      return response.data;

    } catch (err) {
      throw new Error('Failed to add basket');
    }
  });



export const removeBasket = createAsyncThunk('product/removeBasket', async (cartId:any) => {
    try {
        const response = await api.delete(`/v2/cart/${cartId}`);
      
      return response.data;
      
    } catch (err) {
      throw new Error('Failed to remove basket');
    }
  });

  export const updateBasket = createAsyncThunk('product/updateBasket', async (cartId:any) => {
    try {
        const response = await api.put(`/v2/cart/${cartId}`);
      
      return response.data;
      
    } catch (err) {
      throw new Error('Failed to remove basket');
    }
  });



  const basket = createSlice({
    name: 'basket',
    initialState,
    reducers: {},
    extraReducers: builder => {
      builder
        .addCase(fetchBasketList.pending, state => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchBasketList.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload
        })
        .addCase(fetchBasketList.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'failed to fetch basket';
        })
    },
  });

export { basket};
