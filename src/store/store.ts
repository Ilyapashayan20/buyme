import { configureStore } from '@reduxjs/toolkit'
import { categorySlice,categoryTreeSlice } from './features/Category/categorySlice'
import { newProductSlice, productById, stockProductSlice } from './features/Product/productSlice'
import { productReviews } from './features/Product/productReviewsSlice'
import { loginSlice } from './features/Auth/loginSlice'
import { registrationSlice } from './features/Auth/registrationSlice'
import { watchlist } from './features/Watchlist/watchListSlice'
import { basket } from './features/Basket/basketSlice'
import { searchSlice } from './features/Search/searchSlice'
import siteCategorySlice from './siteCategorySlice'




const store = configureStore({
  reducer: {
    rootCategory: categorySlice.reducer,
    categoryTree: categoryTreeSlice.reducer,
    newProducts: newProductSlice.reducer,
    productById: productById.reducer,
    stockProducts: stockProductSlice.reducer,
    productReviews: productReviews.reducer,
    loginSlice: loginSlice.reducer,
    registerSlice:registrationSlice.reducer,
    watchlistSLice: watchlist.reducer,
    basketSlice: basket.reducer,
    search: searchSlice.reducer,
    siteCategory:siteCategorySlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
