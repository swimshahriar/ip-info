import React from "react";

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
  console.log(
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
    query
  );
  // if (!) {
  //   return (
  //     <div>
  //       <h1>Loading...</h1>
  //     </div>
  //   );
  // }

  return (
    <div>
      <h1>{country}</h1>
      <h1>{countryCode}</h1>
      <h1>{region}</h1>
      <h1>{regionName}</h1>
      <h1>{city}</h1>
      <h1>{zip}</h1>
      <h1>{lat}</h1>
      <h1>{lon}</h1>
      <h1>{isp}</h1>
      <h1>{org}</h1>
      <h1>{as}</h1>
      <h1>{query}</h1>
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
