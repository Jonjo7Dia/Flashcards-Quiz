import { createSlice, configureStore } from "@reduxjs/toolkit";

const deckSlice = createSlice({
  name: "deck",
  initialState: {
    items: [
      { placement: 1, id: 1,  term: "", definition: "", url: "" },
      { placement: 2, id: 2, term: "", definition: "", url: "" },
    ],
  },
  reducers: {
    addItemToDeck(state) {
      const newItem = {
        placement: state.items.length + 1,
        id:state.items.length + 1,
        term: "",
        definition: "",
        url: "",
      };

      state.items.push({
        placement: newItem.placement,
        term: newItem.term,
        definition: newItem.definition,
        url: newItem.url,
      });
    },
    removeItemFromDeck(state, action) {
      const id = action.payload;
      let number = id;
      let length = state.items.length;
      state.items = state.items.filter((item) => item.id !== id);
      for (let x = length -number; x < length; x++){
          state.items[x].placement = x +1;
          state.items[x].id = x +1;
      }
    },
  },
});


export const deckActions = deckSlice.actions;

export default deckSlice;