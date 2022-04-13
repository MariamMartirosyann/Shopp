import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter';
import productListReducer from './products'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    productList:productListReducer,
  },
})
