import { createSlice } from "@reduxjs/toolkit";
import { v1 as uuidv1 } from "react-native-uuid";
import { RootState } from "../store/store";

interface task {
  content: string;
  completed: boolean;
  key: string;
}

const initialState: task[] = [
  {
    content: "同小寶食芝士火鍋",
    completed: true,
    key: uuidv1(),
  },
  {
    content: "同小寶過白色聖誕",
    completed: false,
    key: uuidv1(),
  },
];

const toDoListSlice = createSlice({
  name: "toDoListSlice",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return state.concat({
        content: action.payload,
        completed: false,
        key: uuidv1(),
      });
    },
    toggleComplete: (state, action) => {
      const selectedTask = state.find((task) => task.key === action.payload);
      if (selectedTask) selectedTask.completed = !selectedTask.completed;
    },
    deleteTodo: (state, action) => {
      return state.filter((task) => task.key !== action.payload);
    },
  },
});

export default toDoListSlice.reducer;
export const { addTodo, deleteTodo, toggleComplete } = toDoListSlice.actions;

export const selectAllToDoList = (state: RootState) => state.toDoList;
