import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import "./auth.scss";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await register(email, password);
    navigate("/tasks");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Register</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Register</button>
        </form>

        <div className="auth-link">
          <p>
            Ya tienes cuenta? <Link to="/">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}