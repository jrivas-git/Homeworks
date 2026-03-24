import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome: {user?.email}</p>

      <button onClick={() => navigate("/page1")}>Go Page 1</button>
      <button onClick={() => navigate("/page2")}>Go Page 2</button>

      <br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}