import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

type initialStateType = stingyNote[];

export interface stingyNote {
  date: number;
  sin: string;
  penalty: string;
}

const testData = [
  {
    date: Date.parse("August 31, 2020"),
    sin: "又唔講故事",
    penalty: "要講2個故事",
  },
  {
    date: Date.parse("June 17, 2020"),
    sin: "約左我但又五點訓",
    penalty: "",
  },
  {
    date: Date.parse("May 3, 2020"),
    sin: "又唔講故事",
    penalty: "要請我食二寶",
  },
];

const initialState: initialStateType = [...testData];

const stingyNotesSlice = createSlice({
  name: "stingyNotes",
  initialState,
  reducers: {
    addNewStingyNote: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default stingyNotesSlice.reducer;
export const { addNewStingyNote } = stingyNotesSlice.actions;

export const selectAllStingyNotes = (state: RootState) => state.stingyNotes;
