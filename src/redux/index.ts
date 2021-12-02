import { configureStore /* , getDefaultMiddleware */ } from '@reduxjs/toolkit';

import appReducer from './slices/app.slice';
import cartReducer from './slices/cart.slice';
/* import appReducer from './app.slice'; */

/* const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
}); */

export const store = configureStore({
  reducer: {
    app: appReducer,
    cart: cartReducer
  },
  devTools: true
  /*   middleware: customizedMiddleware */
});

// Redux dependencies types

// TODO: fix store.getState not found (TS error)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
