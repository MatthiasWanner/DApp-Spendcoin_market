import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '..';

import { InvoiceItem as CartItem } from '@interfaces/request';

export interface CartState {
  products: CartItem[];
}

const initialState: CartState = {
  products: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      return { ...state, products: [...state.products, { ...action.payload }] };
    }
  }
});

export const { addItem } = cartSlice.actions;

export const useCartFromStore = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const dispatchAddItem = (payload: CartItem) => dispatch(addItem(payload));
  return { cart, dispatchAddItem };
};

export default cartSlice.reducer;
