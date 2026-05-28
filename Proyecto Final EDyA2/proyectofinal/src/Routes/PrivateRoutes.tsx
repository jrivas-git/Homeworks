import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import { useAuthContext } from "../Context/AuthContext";
import Loader from "../Components/Shared/Loader";

interface Props {
  children: ReactNode;
}

export default function PrivateRoutes({ children }: Props) {
  const { user, loading } = useAuthContext();

  if (loading) return <Loader />;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}