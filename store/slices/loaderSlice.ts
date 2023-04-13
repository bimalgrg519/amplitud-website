import { createSlice } from "@reduxjs/toolkit";
import type { AppState } from "@/store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface ILoaderState {
  loaderState: boolean;
}

// Initial state
const initialState: ILoaderState = {
  loaderState: false,
};

// Actual Slice
export const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    // Action to set the Loader status
    setLoaderState(state, action) {
      state.loaderState = action.payload;
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.loader,
      };
    },
  },
});

export const { setLoaderState } = loaderSlice.actions;

export const selectLoaderState = (state: AppState) => state.loader.loaderState;

export default loaderSlice.reducer;
