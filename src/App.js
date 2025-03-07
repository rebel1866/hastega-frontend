import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import UserBooks from "./components/UserBooks";
import BookDetails from "./components/BookDetails";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/users/:userId/books" element={<UserBooks />} />
        <Route path="/books/:bookId" element={<BookDetails />} />
      </Routes>
    </Router>
  );
}
