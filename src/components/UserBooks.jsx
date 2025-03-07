import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles.css";
import { API_BASE_URL } from "../config";

export default function UserBooks() {
    const { userId } = useParams();
    const [books, setBooks] = useState([]);
    const [userName, setUserName] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${API_BASE_URL}/users/${userId}`)
            .then((response) => response.json())
            .then((data) => {
                setUserName(`${data.name} ${data.surname}`);
                setBooks(data.books || []);
            })
            .catch((error) => console.error("Error fetching user details:", error));
    }, [userId]);

    const handleBookClick = (bookId) => {
        navigate(`/books/${bookId}`);
    };

    return (
        <div className="container">
            <div className="title-container">
                <h1 className="title">Books for {userName || "User"}</h1>
            </div>
            <div className="grid-container">
                {books.length > 0 ? books.map((book) => (
                    <div key={book.id} onClick={() => handleBookClick(book.id)} className="card">
                        <h2>{book.title}</h2>
                        <p>Author: {book.author}</p>
                    </div>
                )) : <p>No books found for this user.</p>}
            </div>
        </div>
    );
}