import React from "react";

import styles from "./DetailsCard.module.scss";

const DetailsCard = ({ countryCode, city, isp, timezone }) => {
  return (
    <div className={styles.infoContainer}>
      <div>
        <p>
          <span>COUNTRY: </span>
          {countryCode}
        </p>
        <p>
          <span>CITY: </span>
          {city}
        </p>
      </div>
      <div>
        <p>
          <span>ISP: </span>
          {isp}
        </p>
        <p>
          <span>TIME ZONE: </span>
          {timezone}
        </p>
      </div>
    </div>
  );
};

export default DetailsCard;
