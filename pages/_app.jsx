// Style
import '../styles/globals.scss'

//Component
import Layout from "../components/layout";

//Context
import CartContextProvider from '../context/CartContextProvider';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title> General Store </title>
      <meta name='description' content='a general store for buy anythings' />
    </Head>
    
      <CartContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartContextProvider>
    </>
  )
}

export default MyApp
