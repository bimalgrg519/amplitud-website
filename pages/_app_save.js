import '@/styles/globals.css'
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { StateContext } from '@/lib/context';

export default function App({ Component, pageProps }) {
  return(
    <>
      <StateContext>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </StateContext> 
    </>
  ); 
}
