import React, { useState } from "react";
import Head from "next/head";
import MapBox from "../components/MapBox";
import SearchBox from "../components/SearchBox";
import styles from "./index.module.scss";

export default function Home() {
  const [ipAddress, setIpAddress] = useState("24.48.0.1");
  const [ipInfo, setIpInfo] = useState(null);

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
        <div className={styles.heading}>
          <h1>IP - Info</h1>
        </div>

        <SearchBox
          ipAddress={ipAddress}
          setIpAddress={setIpAddress}
          handleApiRequest={handleApiRequest}
        />
        <MapBox />
      </main>
    </div>
  );
}
