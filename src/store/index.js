import {configureStore} from '@reduxjs/toolkit';

import deckSlice from './deck-slice';
import setSlice from './set-slice';
import favSlice from './fav-slice';
import requestSlice from './request-slice';


const store = configureStore({
    reducer: { deck: deckSlice.reducer, set: setSlice.reducer, fav: favSlice.reducer, request: requestSlice.reducer}
});

export default store;