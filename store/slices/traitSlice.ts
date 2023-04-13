import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "@/store";
import axios from "axios";
import { checkConformityDecimal } from "@/utils/tools";

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
  tokenId: number;
  metadata: {
    [key: string]: string;
  };
}

export interface IFullTrait {
  artwork_type: string;
  tokens_to_generate: number;
  traits_and_attributes: ITraitDetail[];
  static_rules: IRules[];
  tokens: IToken[];
  trait_order: TTrait[];
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

export const getInitialTrait = createAsyncThunk(
  "trait/initTrait",
  async (arg, { getState }) => {
    const state: any = getState(); // <-- invoke and access state object

    const traitState = state.trait.traitState;

    if (traitState === null) {
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
    } else {
      return traitState;
    }
  }
);

// Actual Slice
export const traitSlice = createSlice({
  name: "trait",
  initialState,
  reducers: {
    // Action to set the Trait Type
    updateTraitWeight(state: any, action): void {
      const index = state.traitState.traits_and_attributes.findIndex(
        (e) => e.id === action.payload.id
      );

      if (action.payload.weight > 1) {
        action.payload.weight = 1;
      } else if (
        action.payload.weight !== null &&
        !checkConformityDecimal(action.payload.weight)
      ) {
        action.payload.weight = Number(action.payload.weight.toFixed(4));
      }

      state.traitState.traits_and_attributes[index] = action.payload;

      state.traitState = {
        ...state.traitState,
        traits_and_attributes: state.traitState.traits_and_attributes,
      };
    },
    updateAtributeWeight: (state: any, action) => {
      const indexTrait = state.traitState.traits_and_attributes.findIndex(
        (e) => e.id === action.payload.trait
      );

      const indexAttr = state.traitState.traits_and_attributes[
        indexTrait
      ].attributes.findIndex((e) => e.id === action.payload.attribute.id);

      console.log("sdsqdqsdqsd", action.payload.attribute.weight);

      if (action.payload.attribute.weight > 1) {
        action.payload.attribute.weight = 1;
      } else if (
        action.payload.attribute.weight !== null &&
        !checkConformityDecimal(action.payload.attribute.weight)
      ) {
        action.payload.attribute.weight = Number(
          action.payload.attribute.weight.toFixed(4)
        );
      }

      state.traitState.traits_and_attributes[indexTrait].attributes[indexAttr] =
        action.payload.attribute;

      state.traitState = {
        ...state.traitState,
        traits_and_attributes: state.traitState.traits_and_attributes,
      };
    },
    updateRules: (state: any, action) => {
      state.traitState = {
        ...state.traitState,
        static_rules: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getInitialTrait.fulfilled, (state, { payload }) => {
      state.traitState = payload;
    });
  },
});

export const { updateTraitWeight, updateAtributeWeight, updateRules } =
  traitSlice.actions;

export const selectTraitState = (state: AppState) => state.trait.traitState;

export default traitSlice.reducer;
