import React, { useState, useEffect} from "react";
import styles from "./Sell.module.css";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Sell = () => {
  const [bookname, setBookname] = useState("");
  const [author, setAuthor] = useState("");
  const [condition, setCondition] = useState("");
  const [price, setPrice] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    if(!localStorage.getItem("token")){
      navigate('/login')
    }
  })

  const btnClick = async () => {
    try {
      const authToken = localStorage.getItem("token");
  
      const data = {
        bookname: bookname,
        author: author,
        condition: parseInt(condition),
        price: parseFloat(price),
      };
  
      // Log the data object before making the fetch request
      console.log("Data Object:", data);
  
      const url = "http://localhost:3000/store/createsell";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken,
        },
        body: JSON.stringify(data),
      };
  
      const response = await fetch(url, options);
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const responseData = await response.json();
  
      if (responseData && responseData.message) {
        alert(responseData.message);
        // Optionally, redirect or perform other actions upon successful response
      } else {
        throw new Error("Response data does not contain expected message");
      }
      
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Error: " + error.message);
    }
  };
  

  return (
    
    <div className={styles.sell}>
        <Navbar />
      <h1 className={styles.heading}>List a Book for Sale</h1>
      <div className={styles.form}>
        <input className={styles.input}
          type="text"
          placeholder="Book Name"
          value={bookname}
          onChange={(e) => setBookname(e.target.value)}
        />
        <input className={styles.input}
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input className={styles.input}
          type="number"
          placeholder="Condition (1-5)"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
        />
        <input className={styles.input}
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button className={styles.salebtn} style={{color:"white"}} onClick={btnClick}>List for Sale</button>
      </div>
      {errorMessage && <div className={styles.error}>{errorMessage}</div>}
    </div>
  );
};

export default Sell;