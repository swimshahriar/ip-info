import React from "react";

import styles from "./searchBox.module.scss";

const SearchBox = () => {
  return (
    <div>
      <form className={styles.form}>
        <input type="text" />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBox;
