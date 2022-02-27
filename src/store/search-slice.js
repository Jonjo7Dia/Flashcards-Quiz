import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    search: '',
    searching: false,
    decks: [],
  },
  reducers: {
   setSearching(state, action){
       state.searching = action.payload;
   },
   setSearchItem(state, action){
       state.search = action.payload;
   },
   setDecks(state, action){
    state.decks = action.payload;
   }
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice;
