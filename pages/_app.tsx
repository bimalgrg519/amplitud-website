import { Provider } from "react-redux";
import { wrapper } from "@/store";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "@/styles/globals.scss";
import { injectStore } from "@/store/axios";

export default function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  injectStore(store);

  return (
    <Provider store={store}>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}
