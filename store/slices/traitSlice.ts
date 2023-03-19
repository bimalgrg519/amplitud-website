import { createSlice } from "@reduxjs/toolkit";
import type { AppState } from "@/store";
import { HYDRATE } from "next-redux-wrapper";

export type TTrait =
  | "Background"
  | "Bottom lid"
  | "Eye color"
  | "Eyeball"
  | "Iris"
  | "Shine"
  | "Toplid";

export interface ITraitAttribute {
  id: string;
  weight: number;
  file: string;
  hash: string;
  onlyone: boolean;
  upload_order: number;
}
export interface ITraitDetail {
  id: TTrait;
  weight?: number;
  attributes: ITraitAttribute[];
}

export interface IOther {
  trait: TTrait;
  attribute: string;
}
export interface IRules {
  type: "combination" | "exclusion";
  trait: TTrait;
  attribute: string;
  others: IOther[];
}

export interface IToken {
  trait: TTrait;
  attribute: string;
}

export interface IFullTrait {
  artwork_type: string;
  tokens_to_generate: number;
  traits_and_attributes: ITraitDetail[];
  static_rules: IRules[];
  tokens: IToken[];
}

export interface IState {
  traitState: IFullTrait;
}

// Initial state
const initialState: IState = {
  traitState: null,
};

// Actual Slice
export const traitSlice = createSlice({
  name: "trait",
  initialState,
  reducers: {
    // Action to set the Trait Type
    setTraitState(state, action) {
      state.traitState = action.payload;
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.trait,
      };
    },
  },
});

export const { setTraitState } = traitSlice.actions;

export const selectTraitState = (state: AppState) => state.trait.traitState;

export default traitSlice.reducer;
