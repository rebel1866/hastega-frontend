import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles.css";
import { API_BASE_URL } from "../config";


export default function BookDetails() {
    const { bookId } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        fetch(`${API_BASE_URL}/books/${bookId}`)
            .then((response) => response.json())
            .then((data) => setBook(data))
            .catch((error) => console.error("Error fetching book details:", error));
    }, [bookId]);

    if (!book) {
        return <p className="loading">Loading book details...</p>;
    }

    return (
        <div className="container">
            <div className="title-container" style={{ borderRadius: "10px 10px 0px 0px" }}>
                <h1 className="title">{book.title}</h1>
            </div>

            <div id="book-details">
                <p><strong>Author:</strong> {book.author}</p>
                <p><strong>ISBN:</strong> {book.isbn}</p>
                <p><strong>Date Added:</strong> {book.dateAdded}</p>
                <p><strong>Synopsis:</strong> {book.synopsis}</p>
                <p><strong>Complete Readings:</strong> {book.completeReadings}</p>
            </div>

        </div>
    );
}