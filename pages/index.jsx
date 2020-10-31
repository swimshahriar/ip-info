import Head from 'next/head';
import styles from './index.module.scss';

export default function Home() {
  return (
    <div>
      <Head>
        <title>IP - Info</title>
        <link rel="icon" href="/favicon.ico" />

        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>

      <main>
        <h1>IP - Info</h1>
      </main>
    </div>
  );
}

export const getStaticProps = () => {
  
};
