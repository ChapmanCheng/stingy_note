import { createSlice } from "@reduxjs/toolkit";
import { v1 as uuidv1 } from "react-native-uuid";
import { RootState } from "../store/store";
import Storage from '../Storage'
import listItemType from "./listItemType";

export interface task extends listItemType{
  content: string;
  completed: boolean;
}

const initialState: task[] = [
  {
    content: "同小寶食芝士火鍋",
    completed: true,
    key: uuidv1(),
    belongs: 'task'
  },
  {
    content: "同小寶過白色聖誕",
    completed: false,
    key: uuidv1(),
    belongs: 'task'
  },
];

const toDoListSlice = createSlice({
  name: "toDoListSlice",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTask: task = {
        content: action.payload,
        completed: false,
        key: uuidv1(),
        belongs: 'task'
      }
      Storage.set(newTask)
      return state.concat(newTask)
    },
    toggleComplete: (state, action) => {
      const selectedTask = state.find((task) => task.key === action.payload);
      if (selectedTask) {
        selectedTask.completed = !selectedTask.completed;
        Storage.set(selectedTask)
      }
    },
    deleteTodo: (state, action) => {
      const newState = state.filter((task) => task.key !== action.payload);
      Storage.remove(action.payload)
      return newState;
    },
    restoreAllTodoListTasks: (state, action) => {
      return action.payload
    }
  },
});

export default toDoListSlice.reducer;
export const { addTodo, deleteTodo, toggleComplete, restoreAllTodoListTasks } = toDoListSlice.actions;

export const selectAllToDoList = (state: RootState) => state.toDoList;
