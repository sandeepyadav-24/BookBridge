import React from "react";
import styles from "./store.module.css";
import { Link } from "react-router-dom";

const Store = () => {
  return (
    <div className={styles.store}>
      <h1>Welcome to the Book Store</h1>
      <div className={styles.buttons}>
        <button className={styles.rentButton}><Link to="/store/createsell">Sent a Book</Link></button>
        <button className={styles.sellButton}>Rent a Book</button>
        <button className={styles.requestButton}>Request a Book</button>
      </div>
    </div>
  );
};

export default Store;
