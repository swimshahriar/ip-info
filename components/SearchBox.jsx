import React from "react";

import styles from "./searchBox.module.scss";

const SearchBox = ({ ipAddress, setIpAddress, handleApiRequest }) => {
  return (
    <div>
      <form className={styles.form} onSubmit={handleApiRequest}>
        <input
          type="text"
          placeholder="199.158.118.113"
          value={ipAddress}
          onChange={(event) => setIpAddress(event.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBox;
