import axiosInterceptor from "./axios.interceptor";
import axios from "axios";
import { setLoaderState } from "./slices/loaderSlice";

let store;
export const injectStore = (_store) => {
  store = _store;
};

axios.interceptors.request.use(
  (config) => {
    const values = store.getState();
    store.dispatch(setLoaderState(true));
    return axiosInterceptor(config, { ...values });
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    store.dispatch(setLoaderState(false));
    return response;
  },
  (error) => {
    store.dispatch(setLoaderState(false));
    return Promise.reject(error);
  }
);
