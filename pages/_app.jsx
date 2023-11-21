// Style
import '../styles/globals.scss'

//Component
import Layout from "../components/layout";

//Context
import CartContextProvider from '../context/CartContextProvider';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CartContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartContextProvider>
    </>
  )
}

export default MyApp
