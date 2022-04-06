import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counter';
import productListReducer from './slices/products'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    productList:productListReducer,
  },
})
