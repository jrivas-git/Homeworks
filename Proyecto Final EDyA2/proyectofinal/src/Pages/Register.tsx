import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";

export default function Register() {
  const { register } = useAuthContext();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await register(email, password);
    navigate("/store");
  };

  return (
    <div className="auth-card">
      <h1>Register</h1>

      <form onSubmit={handleSubmit} className="auth-form">
        <input
          className="input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn" type="submit">
          Register
        </button>
      </form>

      <p className="muted">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}