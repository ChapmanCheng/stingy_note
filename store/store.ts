import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import testSliceReducer from "../slices/testSlice";
import stingyNotesReducer from "../slices/stingyNotesSlice";

const store = configureStore({
  reducer: {
    stingyNotes: stingyNotesReducer,
    test: testSliceReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
