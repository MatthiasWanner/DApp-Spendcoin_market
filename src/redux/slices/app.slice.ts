import { Product } from '@interfaces/Product';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../index';

export interface AppState {
  activeModal: boolean;
  viewedProduct: Product;
  invoiceId: string | null;
  requestId: string | null;
  isAwaitingRequest: boolean;
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
  },
  invoiceId: null,
  requestId: null,
  isAwaitingRequest: true
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setActiveModal: (state, action: PayloadAction<boolean>) => {
      return { ...state, activeModal: action.payload };
    },
    setViewedProduct: (state, action: PayloadAction<Product>) => {
      return { ...state, viewedProduct: action.payload };
    },
    resetViewedProduct: (state) => {
      return { ...state, viewedProduct: initialState.viewedProduct };
    },
    setInvoiceId: (state, action: PayloadAction<string | null>) => {
      return { ...state, invoiceId: action.payload };
    },
    setRequestId: (state, action: PayloadAction<string | null>) => {
      return { ...state, requestId: action.payload };
    },
    setIsAwaitingRequest: (state, action: PayloadAction<boolean>) => {
      return { ...state, isAwaitingRequest: action.payload };
    }
  }
});

export const {
  setActiveModal,
  setViewedProduct,
  resetViewedProduct,
  setInvoiceId,
  setRequestId,
  setIsAwaitingRequest
} = appSlice.actions;

export const useAppFromStore = () => {
  const app = useSelector((state: RootState) => state.app);

  const dispatch = useDispatch();

  const dispatchActiveModal = (payload: boolean) =>
    dispatch(setActiveModal(payload));

  const dispatchViewedProduct = (payload: Product) =>
    dispatch(setViewedProduct(payload));

  const dispatchResetViewedProduct = () => dispatch(resetViewedProduct());

  const dispatchInvoiceId = (payload: string | null) =>
    dispatch(setInvoiceId(payload));

  const dispatchRequestId = (payload: string | null) =>
    dispatch(setRequestId(payload));

  const dispatchIsAwaitingRequest = (payload: boolean) =>
    dispatch(setIsAwaitingRequest(payload));
  return {
    app,
    dispatchActiveModal,
    dispatchViewedProduct,
    dispatchResetViewedProduct,
    dispatchInvoiceId,
    dispatchRequestId,
    dispatchIsAwaitingRequest
  };
};

export default appSlice.reducer;
