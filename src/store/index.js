import {configureStore} from '@reduxjs/toolkit';

import deckSlice from './deck-slice';
import setSlice from './set-slice';


const store = configureStore({
    reducer: { deck: deckSlice.reducer, set: setSlice.reducer}
});

export default store;