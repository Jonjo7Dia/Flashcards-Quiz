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
        id: state.items.length + 1,
        term: "",
        definition: "",
        url: "",
      };

      state.items.push({
        placement: newItem.placement,
        id: newItem.id,
        term: newItem.term,
        definition: newItem.definition,
        url: newItem.url,
      });
    },
    removeItemFromDeck(state, action) {
      const id = action.payload;
      let number = id;
      // console.log(number);
      
      state.items = state.items.filter((item) => item.id !== id);
      let length = state.items.length;
      for (let x = -1 ; x < length - number ; x++){
         let placement = state.items[x + number].placement;
      
         state.items[x+number].placement = x + number + 1;
         state.items[x+number].id = x + number + 1;

      }

    },
  },
});


export const deckActions = deckSlice.actions;

export default deckSlice;