import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '..';

import { InvoiceItem as CartItem } from '@interfaces/request';

export interface CartState {
  products: CartItem[];
  total: number;
}

const initialState: CartState = {
  products: [],
  total: 0
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const { unitPrice } = action.payload;
      return {
        ...state,
        total: state.total + +unitPrice,
        products: [...state.products, { ...action.payload }]
      };
    },
    removeItem: (state, action: PayloadAction<CartItem>) => {
      const { products, total } = state;
      const { name, unitPrice } = action.payload;
      const filteredItems = products.filter(
        (product) => product.name !== name || product.unitPrice !== unitPrice
      );
      return {
        ...state,
        total: total - +unitPrice,
        products: [...filteredItems]
      };
    }
  }
});

export const { addItem, removeItem } = cartSlice.actions;

export const useCartFromStore = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const dispatchAddItem = (payload: CartItem) => dispatch(addItem(payload));
  const dispatchRemoveItem = (payload: CartItem) =>
    dispatch(removeItem(payload));
  return { cart, dispatchAddItem, dispatchRemoveItem };
};

export default cartSlice.reducer;
