import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Horacio Blog</title>
        <link rel="icon" href="/h.ico" />
      </Head>

      <main>
        <div>
          <div className={styles.caja}>
            <img className={styles.perfil} src="/descarga.jpeg" alt=""></img>
          </div>
          
          <h1 className={styles.title}>
            Horacio Rojas Erazo
          </h1>

          <p className={styles.description}>
            Un programador en proceso
          </p>

          <p className={styles.text}>
            Mis trabajos revisalos en <a href='https://github.com/Hracio11'>Github</a>
          </p>
        </div>
      </main>
    </div>
  );
}
