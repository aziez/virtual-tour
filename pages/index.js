
import { List, Modal } from 'antd';
import Head from 'next/head'
import Pano from '../components/Pano';
import styles from '../styles/Home.module.css'
import { useState } from 'react';
import Link from 'next/link';


export default function Home() {
  const panoImg = "https://photo-sphere-viewer-data.netlify.app/assets/";
  const [isModalOpen, setIsmodalOpen] = useState(false);
  const visi = ['“Menjadi universitas peringkat 40 besar pada tingkat nasional yang dilandasi oleh nilai humanis dan religius pada tahun 2024”']
  const misi = [
    'Menyelenggarakan pendidikan akademik, vokasi, dan profesi yang profesional berbasis humanis dan religius.',
    'Melaksanakan penelitian berbasis humanis dan religius yang menghasilkan inovasi untuk kesejahteraan masyarakat.',
    'Melaksanakan pengabdian kepada masyarakat implementasi penelitian berbasis humanis dan religius.',
    'Menyelenggarakan peningkatan kualitas sumber daya manusia yang kompeten dan profesional.',
    'Menyelenggarakan kerja sama dalam negeri dan luar negeri berbasis saling menguntungkan.'
  ]

  const handleClick = () => {
    console.log('klik berhasil');
  };

  const showModal = () => {
    setIsmodalOpen(true)
  }

  const handleOk = () => {
    setIsmodalOpen(false)
  }

  const handleCancel = () => {
    setIsmodalOpen(false)
  }

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Virtual Tour</title>
          <meta name="description" content="Virtual Tour Universitas Pamulang" />
          <meta name="keywords" content="Virtual Tour" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Pano className={styles.pano} pano={'360/14.jpg'} load={panoImg + 'loader.gif'} rotate={300} zoom={0}/>

        <main className={styles.hero}>
          <div className={styles.card}>
            <h1 className={styles.title}>
              Selamat Datang di <a>Virtual Tour</a>
            </h1>

            <p className={styles.description}>
              <code className={styles.code}>Jelajahi Lingkungan Universitas Pamulang secara Virtual</code>
            </p>
          </div>
          <Link href="/selection">
          <button type="button" className="btn btn-outline-info btn-lg" onClick={handleClick}>Mulai</button>
          </Link>
          
        </main>

        <div className={styles.footer}>
          <img width={'64px'} src='https://unpam.ac.id/wp-content/uploads/2021/02/logo-unpam-300x291.png' />
          <p className={styles.description}>Berbagi untuk Negri</p>
          <button type="button" className="btn btn-outline-primary" onClick={showModal}>Visi dan Misi</button>
        </div>
      </div>

     

      <Modal title="UNIVERSITAS PAMULANG" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={[]} width={1000} centered={true}>
        <h3 className={styles.Head}> Misi </h3>
        <List size='large' bordered dataSource={visi} renderItem={item => <List.Item>{item}</List.Item>} />
        <h3 className={styles.Head}>Visi</h3>
        <List size='large' bordered dataSource={misi} renderItem={item => <List.Item>{item}</List.Item>} />
      </Modal>
    </>
  )
}
