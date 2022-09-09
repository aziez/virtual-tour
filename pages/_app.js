import '../styles/globals.css'
import "photo-sphere-viewer/dist/plugins/markers.css";
import "photo-sphere-viewer/dist/photo-sphere-viewer.css";
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head';
import 'antd/dist/antd.css'; //





function MyApp({ Component, pageProps }) {
  return(
  <>
  <Head>
    <meta name='viewport' content='width=device-width, initial-scale=1' />
  </Head>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
