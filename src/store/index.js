import {configureStore} from '@reduxjs/toolkit';

import deckSlice from './deck-slice';
import setSlice from './set-slice';
import favSlice from './fav-slice';


const store = configureStore({
    reducer: { deck: deckSlice.reducer, set: setSlice.reducer, fav: favSlice.reducer}
});

export default store;