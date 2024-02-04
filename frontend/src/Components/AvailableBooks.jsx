import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './AvailableBooks.module.css';
import Navbar from './Navbar';

const AvailableBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            const response = await axios.post('http://localhost:3000/store/fetchsell', { page: 1, limit: 10 });
            setBooks(response.data.books);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    return (
        <div className={styles.catalogue}>
            <Navbar />
            <h2 style={{fontSize: "40px", color: "crimson"}}>Available Books</h2>
            <div className={styles.bookList}>
                {books.map(book => (
                    <div key={book._id} className={styles.bookItem}>
                        <img src={book.image} alt={book.title} />
                        <div className={styles.bookDetails}>
                            <h3>{book.title}</h3>
                            <p>{book.author}</p>
                            <p>{book.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AvailableBooks;
