import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { AppState } from "@/store";
import { HYDRATE } from "next-redux-wrapper";
import axios from "axios";

export type TTrait =
  | "Background"
  | "Bottom lid"
  | "Eye color"
  | "Eyeball"
  | "Iris"
  | "Shine"
  | "Toplid";

export type TType = "combination" | "exclusion";

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
  type: TType;
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

export interface ICombinaisons {
  main: IOther;
  type: TType;
  rules: IOther[];
  tmp: IOther;
}

export type TMangeTypeOfRule =
  | "main-trait"
  | "main-attribute"
  | "sub-trait"
  | "sub-attribute"
  | "type";

// Initial state
const initialState: IState = {
  traitState: null,
};

export const getInitialTrait = createAsyncThunk("trait/initTrait", async () => {
  const response = await axios.get(
    process.env.NEXT_PUBLIC_API_URL + "get-generative-configuration/33"
  );

  const traits_and_attributes = Object.entries(
    response.data.traits_and_attributes
  ).map((e: any) => {
    const attributes = Object.entries(e[1].attributes).map((f: any) => {
      return {
        id: f[0],
        ...f[1],
      };
    });

    return {
      ...e[1],
      attributes: attributes,
      id: e[0],
    };
  });

  return { ...response.data, traits_and_attributes };
});

// Actual Slice
export const traitSlice = createSlice({
  name: "trait",
  initialState,
  reducers: {
    // Action to set the Trait Type
    // setTraitState(state, action): void {
    //   state.traitState = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getInitialTrait.fulfilled, (state, { payload }) => {
      state.traitState = payload;
    });
  },
});

// export const { setTraitState } = traitSlice.actions;

export const selectTraitState = (state: AppState) => state.trait.traitState;

export default traitSlice.reducer;
