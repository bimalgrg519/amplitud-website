import { createSlice } from "@reduxjs/toolkit";
import type { AppState } from "@/store";
import { HYDRATE } from "next-redux-wrapper";

export interface ITraitTypeState {
  id: number;
  name: number;
}
// Type for our state
export interface IState {
  traitTypeState: ITraitTypeState[];
}

// Initial state
const initialState: IState = {
  traitTypeState: [],
};

// Actual Slice
export const traitTypeSlice = createSlice({
  name: "traitType",
  initialState,
  reducers: {
    // Action to set the Trait Type
    setTraitTypeState(state, action) {
      state.traitTypeState = action.payload;
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.traitType,
      };
    },
  },
});

export const { setTraitTypeState } = traitTypeSlice.actions;

export const selectTraitTypeState = (state: AppState) =>
  state.traitType.traitTypeState;

export default traitTypeSlice.reducer;
