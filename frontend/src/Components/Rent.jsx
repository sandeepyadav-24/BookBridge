// Rent.jsx

import React, { useState } from "react";
import styles from "./Rent.module.css";
import Navbar from "./Navbar";

const Rent = () => {
  const [bookname, setBookname] = useState("");
  const [author, setAuthor] = useState("");
  const [duration, setDuration] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const authToken = localStorage.getItem("token");

      const data = {
        bookname,
        author,
        duration: parseInt(duration),
      };

      const url = "http://localhost:3000/store/reqrent";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken,
        },
        body: JSON.stringify(data),
      };

      const response = await fetch(url, options);
      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error);
      }

      if (responseData.success) {
        alert(responseData.msg);
        // Optionally, redirect or perform other actions upon successful response
      } else {
        throw new Error("Request failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Error: " + error.message);
    }
  };

  return (
    <div className={styles.rent}>
        <Navbar />
      <h1 className={styles.title}>Request a Book for Rent</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book Name"
          value={bookname}
          onChange={(e) => setBookname(e.target.value)}
          className={styles.inputField}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className={styles.inputField}
        />
        <input
          type="number"
          placeholder="Duration (in days)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className={styles.inputField}
        />
        <button type="submit" className={styles.submitButton}>
          Request for Rent
        </button>
      </form>
      {errorMessage && <div className={styles.error}>{errorMessage}</div>}
    </div>
  );
};

export default Rent;
