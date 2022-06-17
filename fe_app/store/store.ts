import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import registerProcessReducer from "./slices/registerProcessSlice";

export const store = configureStore({
  reducer: {
    registerProcess: registerProcessReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
