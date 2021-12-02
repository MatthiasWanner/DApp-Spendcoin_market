import { Product } from '@interfaces/Product';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../index';

export interface AppState {
  activeModal: boolean;
  productOverview: Product;
}

const initialState: AppState = {
  activeModal: false,
  productOverview: {
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
    setproductOverview: (state, action: PayloadAction<Product>) => {
      return { ...state, productOverview: { ...action.payload } };
    }
  }
});

export const { setActiveModal, setproductOverview } = appSlice.actions;

export const useAppFromStore = () => {
  const app = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();
  const dispatchActiveModal = (payload: boolean) =>
    dispatch(setActiveModal(payload));
  const dispatchproductOverview = (payload: Product) =>
    dispatch(setproductOverview(payload));
  return { app, dispatchActiveModal, dispatchproductOverview };
};

export default appSlice.reducer;
