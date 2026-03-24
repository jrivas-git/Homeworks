import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export default function PrivateRoute({ children }: any) {
  const { user } = useContext(AuthContext);

  return user ? children : <h1>403 - Unauthorized</h1>;
}
