import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: process.env.REACT_APP_CATEGORY_ID || '', 
};

const siteCategorySlice = createSlice({
  name: 'siteCategory',
  initialState,
  reducers: {
    setSiteCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setSiteCategory } = siteCategorySlice.actions;

export default siteCategorySlice.reducer;
