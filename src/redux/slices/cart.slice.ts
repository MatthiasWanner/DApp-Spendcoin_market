import { Product } from '@interfaces/Product';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '..';

import { InvoiceItem } from '@interfaces/request';

export interface CartState {
  products: InvoiceItem[];
}

const initialState: CartState = {
  products: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<InvoiceItem>) => {
      return { ...state, products: [...state.products, { ...action.payload }] };
    }
  }
});

export const { addProduct } = cartSlice.actions;

export const useCartFromStore = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const dispatchAddProduct = (payload: InvoiceItem) =>
    dispatch(addProduct(payload));
  return { cart, dispatchAddProduct };
};

export default cartSlice.reducer;
