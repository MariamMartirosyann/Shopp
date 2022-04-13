import { createSlice } from '@reduxjs/toolkit'
import  {cameraList} from '../constants';
const name = "ProductList";

const initialState = {
  products: cameraList,
  activeProduct: cameraList[0]
}

const productsSlice = createSlice({
  name,
  initialState,
  reducers: {
    setActiveProduct: (state, action) => {
      state.activeProduct = action.payload;
    }
  }
})

export const selectProducts = state => state.productList.products;
export const selecActivetProduct = state => state.productList.activeProduct;

export const  {setActiveProduct} = productsSlice.actions;

export default productsSlice.reducer