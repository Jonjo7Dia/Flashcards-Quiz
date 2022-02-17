import {configureStore} from '@reduxjs/toolkit';

import deckSlice from './deck-slice';



const store = configureStore({
    reducer: { deck: deckSlice.reducer}
});

export default store;