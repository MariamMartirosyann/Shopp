import { createSlice } from '@reduxjs/toolkit'
import  {cameraList} from '../constants';
const name = "ProductList";

const initialState = {
  products: cameraList,
}

const productsSlice = createSlice({
  name,
  initialState,
})

export const selectProducts = state => state.productList.products;

export default productsSlice.reducer