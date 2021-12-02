import ProductList from '@components/ShopComponents/ProductsComponents/ProductList';
import { Product } from '@interfaces/Product';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '..';

export interface CartState {
  products: Product[];
}

const initialState = {
  products: new Array<Product>()
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      return { ...state, products: [...state.products, { ...action.payload }] };
    }
  }
});

export const { addProduct } = cartSlice.actions;

export const useCartFromStore = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const dispatchAddProduct = (payload: Product) =>
    dispatch(addProduct(payload));
  return { cart, dispatchAddProduct };
};

export default cartSlice.reducer;
