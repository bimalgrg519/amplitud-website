import { createSlice, CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import type { AppState } from "@/store";
import { HYDRATE } from "next-redux-wrapper";

export interface IError {
  status: boolean;
  message: string;
}

// Type for our state
export interface IErrorState {
  errorState: IError;
}

// Initial state
const initialState: IErrorState = {
  errorState: {
    status: false,
    message: null,
  },
};

// Actual Slice
export const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    // Action to set the Error status
    setErrorState(state, action) {
      state.errorState = action.payload;
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.error,
      };
    },
  },
});

export const { setErrorState } = errorSlice.actions;

export const selectErrorState = (state: AppState) => state.error.errorState;

export default errorSlice.reducer;
