import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import MapBox from "../components/MapBox";
import SearchBox from "../components/SearchBox";
import styles from "./index.module.scss";
import DetailsCard from "../components/DetailsCard";

export default function Home({
  countryCode,
  city,
  lat,
  lon,
  timezone,
  isp,
  query,
}) {
  const router = useRouter();
  const [ipAddress, setIpAddress] = useState("24.48.0.1");

  const handleApiRequest = (event) => {
    event.preventDefault();
    router.push(`/${ipAddress}`);
  };

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

        {!countryCode && !isp ? (
          <h1 className={styles.errorMsg}>
            Try Again, Something Went Wrong! :(
          </h1>
        ) : (
          <>
            <DetailsCard
              countryCode={countryCode}
              city={city}
              isp={isp}
              timezone={timezone}
            />
            <MapBox lon={lon} lat={lat} />
          </>
        )}
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("http://ip-api.com/json/24.48.0.1");
  const ipData = await res.json();

  let propsData = {
    countryCode: null,
    regionName: null,
    city: null,
    lat: null,
    lon: null,
    timezone: null,
    isp: null,
    query: null,
  };
  if (ipData.status !== "fail") {
    const {
      countryCode,
      regionName,
      city,
      lat,
      lon,
      timezone,
      isp,
      query,
    } = ipData;
    propsData = {
      countryCode,
      regionName,
      city,
      lat,
      lon,
      timezone,
      isp,
      query,
    };
  }
  return {
    props: propsData,
  };
};
