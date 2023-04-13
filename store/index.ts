import {
  configureStore,
  ThunkAction,
  Action,
  applyMiddleware,
} from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import thunk from "redux-thunk";
import { loaderSlice } from "./slices/loaderSlice";
import { traitSlice } from "./slices/traitSlice";
import { errorSlice } from "./slices/errorSlice";

const enhancer = applyMiddleware(thunk);

const makeStore = () =>
  configureStore({
    reducer: {
      [loaderSlice.name]: loaderSlice.reducer,
      [traitSlice.name]: traitSlice.reducer,
      [errorSlice.name]: errorSlice.reducer,
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
