import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { addressesApi } from './addressesApi';
import { conversionsApi } from './conversionsApi';

export const store = configureStore({
  reducer: {
    [addressesApi.reducerPath]: addressesApi.reducer,
    [conversionsApi.reducerPath]: conversionsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      .concat(addressesApi.middleware)
      .concat(conversionsApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
