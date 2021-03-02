import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import testSliceReducer from "../slices/testSlice";
import stingyNotesReducer from "../slices/stingyNotesSlice";
import toDoListReducer from "../slices/toDoListSlice";

const store = configureStore({
  reducer: {
    stingyNotes: stingyNotesReducer,
    toDoList: toDoListReducer,
    test: testSliceReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
