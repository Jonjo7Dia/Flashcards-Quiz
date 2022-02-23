import { createSlice } from "@reduxjs/toolkit";

const setSlice = createSlice({
  name: "deck",
  initialState: {
    title: "",
    description: "",
    deck: [],
    isSubmitable: false,
  },
  reducers: {
    setTitle(state, action) {
      state.title = action.payload;
    },
    setDescription(state, action) {
      state.description = action.payload;
    },
    setDeck(state, action) {
      state.deck = action.payload;
    },
    submitDeck(state) {
      const url = "https://react-hooks-update-27f2d-default-rtdb.firebaseio.com/sets.json";
      fetch(url, {
        method: "POST",
        body: JSON.stringify(state),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => {
          console.log('success');
      }
      );
    
    },
    resetDeck(state){
        state.title = '';
          state.description = '';
          state.deck = [];
          state.isSubmitable = false;
    }
  },
});

export const setActions = setSlice.actions;

export default setSlice;
