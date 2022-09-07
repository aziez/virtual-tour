// import { Button } from '@material-tailwind/react';
import Head from 'next/head'
import Pano from '../components/Pano';
import styles from '../styles/Home.module.css'


export default function Home() {
  const panoImg = "https://photo-sphere-viewer-data.netlify.app/assets/";

  const handleClick= () =>{
   console.log('klik berhasil');
  };


  return (
    <div className={styles.container}>
      <Head>
        <title>Virtual Tour</title>
        <meta name="description" content="Virtual Tour Universitas Pamulang" />
        <meta name="keywords" content="Virtual Tour" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

       <Pano pano={panoImg+'sphere.jpg'} load={panoImg+'loader.gif'} rotate={300} />
      
    <main className={styles.hero}>
      <img width={'128px'} src='https://unpam.ac.id/wp-content/uploads/2021/02/logo-unpam-300x291.png'/>
        <div className={styles.card}>
        <h1 className={styles.title}>
          Selamat Datang di <a>Virtual Tour</a>
        </h1>


        <p className={styles.description}>
          <code className={styles.code}>Jelajahi Lingkungan Universitas Pamulang secara Virtual</code>
        </p>
        </div>
        <button className={styles.btn} onClick={handleClick}>Mulai</button>
      </main>

     

    </div>
  )
}
