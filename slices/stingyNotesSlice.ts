import { createSlice } from "@reduxjs/toolkit";
import { v1 as uuidv1 } from "react-native-uuid";
import { RootState } from "../store/store";
import Storage from '../Storage'
import listItemType from './listItemType'

type initialStateType = stingyNote[];

export interface stingyNote extends listItemType {
  date: number;
  sin: string;
  penalty: string;
}

const testData = [
  {
    date: Date.parse("August 31, 2020"),
    sin: "又唔講故事",
    penalty: "要講2個故事",
    key: uuidv1(),
    belongs: 'stingy'
  },
  {
    date: Date.parse("June 17, 2020"),
    sin: "約左我但又五點訓",
    penalty: "",
    key: uuidv1(),
    belongs: 'stingy'
  },
  {
    date: Date.parse("May 3, 2020"),
    sin: "又唔講故事",
    penalty: "要請我食二寶",
    key: uuidv1(),
    belongs: 'stingy'
  },
];

const initialState: initialStateType = [...testData];

const stingyNotesSlice = createSlice({
  name: "stingyNotes",
  initialState,
  reducers: {
    addNewStingyNote: (state, action) => {
      const {date, sin, penalty}  = action.payload 
      const key = uuidv1()
      const belongs = 'stingy'
      const newStingyNote: stingyNote  = { date, sin, penalty, key, belongs }
      
      Storage.set(newStingyNote)

      return state.concat(newStingyNote)
    },

    restoreAllStingyNotes: (state, action) => {
      return action.payload
    }
  },
});

export default stingyNotesSlice.reducer;
export const { addNewStingyNote, restoreAllStingyNotes } = stingyNotesSlice.actions;

export const selectAllStingyNotes = (state: RootState) => state.stingyNotes;
