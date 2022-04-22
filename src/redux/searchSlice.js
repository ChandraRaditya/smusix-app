import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "token",
  initialState: {
    value: "",
  },
  reducers: {
    searchGet: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { searchGet } = searchSlice.actions;
export default searchSlice.reducer;
