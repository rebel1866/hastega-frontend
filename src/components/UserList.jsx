
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";
import { API_BASE_URL } from "../config";


export default function UserList() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_BASE_URL}/users`)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleUserClick = (userId) => {
    navigate(`/users/${userId}/books`);
  };

  return (
    <div className="container">
        <div className="title-container"><h1 className="title">User List</h1></div>
      
      <div className="grid-container">
        {users.map((user) => (
          <div key={user.id} onClick={() => handleUserClick(user.id)} className="card">
            <h2>{user.name} {user.surname}</h2>
            <p>Email: {user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
