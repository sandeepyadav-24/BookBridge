import React from "react";
import styles from "./store.module.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import bookImage from "../assets/bookgif.gif"; // Import an example book image

const Store = () => {
  return (
    <>
    
    <div className={styles.store}>
      <Navbar></Navbar>
      <h1 className={styles.heading}>Welcome to the Book Store</h1>
      <div className={styles.intro}>
        <p className={styles.briefing}>Welcome to our book store! Browse our collection of books, rent or buy, and enjoy reading.</p>
        <img src={bookImage} alt="Book" className={styles.bookImage} />
      </div>
      <div className={styles.buttons}>
        <button className={styles.rentButton}><Link to="/store/createsell">Sell a Book</Link></button>
        <button className={styles.available}><Link to="/store/availablebooks">Buy Book</Link></button>
        <button className={styles.sellButton}><Link to="/store/rent">Lend a Book</Link></button>
        <button className={styles.sellButton}><Link to="/store/availablebooksforrent">Borrow Book</Link></button>
        
      </div>
    </div>
    </>
  );
};

export default Store;
