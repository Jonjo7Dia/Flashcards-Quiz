import { createSlice } from "@reduxjs/toolkit";

const recentsSlice = createSlice({
  name: "recent",
  initialState: {
    Recents: [],
  },
  reducers: {
    setRecents(state){
        if(!(localStorage.getItem('Recents'))){
            localStorage.setItem('Recents',[]);
        }
        else {
            state.Recents = JSON.parse(localStorage.getItem('Recents'));
        }
    },
    addRecents(state, action){
        let id = action.payload;
        let holder = [...state.Recents];
        if (!holder.includes(id) && holder.length < 3){
          holder = [...holder, id];
          state.Recents = holder;
          localStorage.setItem('Recents', JSON.stringify(holder));
        }
        else if (!holder.includes(id) && holder.length === 3){
            holder = [...holder, id];
            holder.splice(0,1);
            state.Recents = holder;
            localStorage.setItem('Recents', JSON.stringify(holder));
        }
        
    },
    
  },
});

export const recentActions = recentsSlice.actions;

export default recentsSlice;
