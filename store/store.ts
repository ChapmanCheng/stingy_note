import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import testSliceReducer from "../slices/testSlice";

const store = configureStore({
  reducer: testSliceReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
