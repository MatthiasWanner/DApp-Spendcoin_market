import { Product } from '@interfaces/Product';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../index';

export interface AppState {
  activeModal: boolean;
  viewedProduct: Product;
}

const initialState: AppState = {
  activeModal: false,
  viewedProduct: {
    name: '',
    href: '',
    basePrice: '',
    currencySymbol: '',
    VAT: '',
    description: '',
    images: [],
    breadcrumbs: [],
    options: []
  }
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setActiveModal: (state, action: PayloadAction<boolean>) => {
      return { ...state, activeModal: action.payload };
    },
    setViewedProduct: (state, action: PayloadAction<Product>) => {
      return { ...state, viewedProduct: { ...action.payload } };
    }
  }
});

export const { setActiveModal, setViewedProduct } = appSlice.actions;

export const useAppFromStore = () => {
  const app = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();
  const dispatchActiveModal = (payload: boolean) =>
    dispatch(setActiveModal(payload));
  const dispatchViewedProduct = (payload: Product) =>
    dispatch(setViewedProduct(payload));
  return { app, dispatchActiveModal, dispatchViewedProduct };
};

export default appSlice.reducer;
