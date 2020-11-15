import React from "react";
import { motion, transform } from "framer-motion";

import styles from "./searchBox.module.scss";

const SearchBox = ({ ipAddress, setIpAddress, handleApiRequest }) => {
  return (
    <div>
      <motion.form
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.form}
        onSubmit={handleApiRequest}
      >
        <input
          type="text"
          placeholder="199.158.118.113"
          value={ipAddress}
          onChange={(event) => setIpAddress(event.target.value)}
        />
        <button>Search</button>
      </motion.form>
    </div>
  );
};

export default SearchBox;
