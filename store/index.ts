import {
  configureStore,
  ThunkAction,
  Action,
  applyMiddleware,
} from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import thunk from "redux-thunk";
import { loaderSlice } from "./slices/loaderSlice";
import { traitTypeSlice } from "./slices/traitTypeSlice";

const enhancer = applyMiddleware(thunk);

const makeStore = () =>
  configureStore({
    reducer: {
      [loaderSlice.name]: loaderSlice.reducer,
      [traitTypeSlice.name]: traitTypeSlice.reducer,
    },
    devTools: true,
    enhancers: [enhancer],
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
