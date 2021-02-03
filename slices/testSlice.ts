import { createSlice } from "@reduxjs/toolkit";

interface initialStateInterface {
  value: string
}
const initialState: initialStateInterface = {
  value: 'Hello world'
}

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {},
});

export default testSlice.reducer;
