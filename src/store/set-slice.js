import { createSlice } from "@reduxjs/toolkit";

const setSlice = createSlice({
  name: "deck",
  initialState: {
    title: '',
    description: '',
    deck: [
     ],
     isSubmitable: false,
    
  },
  reducers: {
   setTitle(state, action){
       state.title = action.payload;
   },
   setDescription(state, action){
       state.description = action.payload;
   },
   setDeck(state, action){
       state.deck = action.payload;
   },
   setIsSubmitable (state, action){
       state.isSubmitable = action.payload;
   }
     
  },
});

export const setActions = setSlice.actions;

export default setSlice;