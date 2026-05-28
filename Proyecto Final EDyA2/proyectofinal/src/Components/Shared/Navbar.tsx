import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";
import { useCartContext } from "../../Context/CartContext";
import { useFavoritesContext } from "../../Context/FavoritesContext";

export default function Navbar() {
  const { user, logout } = useAuthContext();
  const { cart } = useCartContext();
  const { favorites } = useFavoritesContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <header className="navbar">
      <Link to="/" className="brand">Mini Game Store</Link>

      <nav className="navbar-links">
        <Link to="/store">Store</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
        <Link to="/favorites">Favorites ({favorites.length})</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/admin">Admin</Link>
      </nav>

      <div className="navbar-user">
        {user ? (
          <>
            <span>{user.email}</span>
            <button className="btn btn-secondary" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="btn btn-secondary" to="/login">Login</Link>
            <Link className="btn" to="/register">Register</Link>
          </>
        )}
      </div>
    </header>
  );
}