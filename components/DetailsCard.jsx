import React from "react";
import { motion } from "framer-motion";

import styles from "./DetailsCard.module.scss";

const DetailsCard = ({ countryCode, city, isp, timezone }) => {
  return (
    <motion.div
      className={styles.infoContainer}
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
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
    </motion.div>
  );
};

export default DetailsCard;
