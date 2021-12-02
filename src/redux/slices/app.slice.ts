import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../index';

export interface AppState {
  activeModal: boolean;
}

const initialState: AppState = {
  activeModal: false
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setActiveModal: (state, action: PayloadAction<boolean>) => {
      return { ...state, activeModal: action.payload };
    }
  }
});

export const { setActiveModal } = appSlice.actions;

export const useAppFromStore = () => {
  const app = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();
  const dispatchActiveModal = (payload: boolean) =>
    dispatch(setActiveModal(payload));
  return { app, dispatchActiveModal };
};

export default appSlice.reducer;
