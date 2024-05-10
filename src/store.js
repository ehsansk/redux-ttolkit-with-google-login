import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/CounterSlice'
import gmailSlice from "./features/gmail-slice/GmailSlice"
import ProductSlice from './features/products/ProductSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    userData: gmailSlice,
    allProduct: ProductSlice,
  },
})