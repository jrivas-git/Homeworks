import { useAuthContext } from "../Context/AuthContext";

export default function Profile() {
  const { user } = useAuthContext();

  return (
    <div className="profile-page">
      <h1>Profile</h1>

      <div className="profile-card">
        <p>
          <strong>Email:</strong> {user?.email}
        </p>
        <p>
          <strong>UID:</strong> {user?.uid}
        </p>
        <p className="muted">
          Future improvements: orders, address, payment methods.
        </p>
      </div>
    </div>
  );
}