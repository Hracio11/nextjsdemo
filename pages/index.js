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
          <h1 className={styles.title}>
            Hola Soy<a href="https://nextjs.org">Horacio</a>
          </h1>

          <p className={styles.description}>
            Soy un programador en proceso
          </p>

          <img src="/lentes.jpg" alt="" width="200px"></img>
        </div>
      </main>

      

    </div>
  );
}
