import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import { useAuthContext } from "../Context/AuthContext";
import Loader from "../Components/Shared/Loader";

interface Props {
  children: ReactNode;
}

export default function AdminRoutes({ children }: Props) {
  const { user, loading } = useAuthContext();
  const adminEmail = "admin@gmail.com";

  if (loading) return <Loader />;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.email !== adminEmail) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}