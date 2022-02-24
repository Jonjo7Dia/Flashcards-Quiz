import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
  name: "fav",
  initialState: {
    fav: [],
  },
  reducers: {
    setFavs(state){
        if(!(localStorage.getItem('Favorites'))){
            localStorage.setItem('Favorites',[]);
        }
        else {
            state.fav = JSON.parse(localStorage.getItem('Favorites'));
        }
    },
    addFav(state, action){
        let id = action.payload;
        console.log(id);
        let holder = [...state.fav];
        holder = [...holder, id];
        state.fav = holder;
        localStorage.setItem('Favorites', JSON.stringify(holder));
    },
    removeFav(state, action){
      const id = action.payload;
      state.fav = state.fav.filter((obj) => obj !== id);
      localStorage.removeItem('Favorites');
      localStorage.setItem('Favorites', JSON.stringify(state.fav));
    }
  },
});

export const favActions = favSlice.actions;

export default favSlice;
