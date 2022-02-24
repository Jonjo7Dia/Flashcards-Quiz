import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "request",
  initialState: {
    requests: [],
    loading: true,
  },
  reducers: {
    setRequests(state, action){
     state.requests = action.payload;
    },
    setLoading(state, action){
        state.loading = action.payload;
    }
  },
});

export const requestActions = requestSlice.actions;

export default requestSlice;
