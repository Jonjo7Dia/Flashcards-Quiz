import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    search: [],
    searching: false,
  },
  reducers: {
   setSearching(state, action){
       state.searching = action.payload;
   }
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice;
