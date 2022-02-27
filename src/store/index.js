import {configureStore} from '@reduxjs/toolkit';

import deckSlice from './deck-slice';
import setSlice from './set-slice';
import favSlice from './fav-slice';
import requestSlice from './request-slice';
import recentsSlice from './rec-slice';
import searchSlice from './search-slice';


const store = configureStore({
    reducer: { deck: deckSlice.reducer, set: setSlice.reducer, fav: favSlice.reducer, request: requestSlice.reducer, recents: recentsSlice.reducer, search: searchSlice.reducer}
});

export default store;