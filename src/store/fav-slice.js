import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
  name: "fav",
  initialState: {
    fav: [],
  },
  reducers: {
    setFavs(state){
        if(!localStorage.getItem('Favorites')){
            localStorage.setItem('Favorites',[]);
        }
        else {
            state.fav = localStorage.getItem('Favorites');
        }
    }
  },
});

export const favActions = favSlice.actions;

export default favSlice;
