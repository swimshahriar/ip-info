import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import MapBox from "../components/MapBox";
import SearchBox from "../components/SearchBox";
import styles from "./index.module.scss";
import DetailsCard from "../components/DetailsCard";

const ipInfo = ({
  country,
  countryCode,
  region,
  regionName,
  city,
  zip,
  lat,
  lon,
  timezone,
  isp,
  org,
  as,
  query,
}) => {
  const router = useRouter();
  const [ipAddress, setIpAddress] = useState(query);

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
        <DetailsCard
          countryCode={countryCode}
          city={city}
          isp={isp}
          timezone={timezone}
        />
        <MapBox lon={lon} lat={lat} />
      </main>
    </div>
  );
};

export default ipInfo;

export const getServerSideProps = async ({ params }) => {
  const responseIpInfo = await fetch(`http://ip-api.com/json/${params.ipInfo}`);
  const {
    country,
    countryCode,
    region,
    regionName,
    city,
    zip,
    lat,
    lon,
    timezone,
    isp,
    org,
    as,
    query,
  } = await responseIpInfo.json();

  return {
    props: {
      country,
      countryCode,
      region,
      regionName,
      city,
      zip,
      lat,
      lon,
      timezone,
      isp,
      org,
      as,
      query,
    },
  };
};
