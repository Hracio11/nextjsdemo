import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function sobremi() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sobre mi</title>
        <link rel="icon" href="/h.ico" />
      </Head>

      <main>
        <div>
          <h1 className={styles.title}>
            Sobre <a href="https://nextjs.org">Mi</a>
          </h1>

          <p className={styles.description}>
            Estoy en practicas de AYPHU
          </p>
        </div>
      </main>

      

    </div>
  );
}
