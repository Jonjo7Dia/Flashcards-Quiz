import { createSlice } from "@reduxjs/toolkit";

const deckSlice = createSlice({
  name: "deck",
  initialState: {
    items: [
      { placement: 1, id: 1, term: "", definition: "", url: "" },
      {
        placement: 2,
        id: 2,
        term: "",
        definition: "",
        url: "",
      },
    ],
    totalChanges: 400,
  },
  reducers: {
    addItemToDeck(state) {
      const newItem = {
        placement: state.items.length + 1,
        id: state.totalChanges + 1,
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
      state.totalChanges++;
    },
    removeItemFromDeck(state, action) {
      const id = action.payload.id;

      state.items = state.items.filter((item) => item.id !== id);
      state.totalChanges++;
    },
    addTermToDeck(state, action) {
      let yolo = action.payload;
      state.items[yolo.placement - 1] = yolo;
    },
    rerender(state) {
      for (let x = 0; x < state.items.length; x++) {
        state.items[x].placement = x + 1;
      }
    },
  },
});

export const deckActions = deckSlice.actions;

export default deckSlice;
