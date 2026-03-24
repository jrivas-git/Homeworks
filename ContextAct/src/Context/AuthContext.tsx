import { createContext } from "react";
import { UseAuth } from "../Hooks/UseAuth";

export const AuthContext = createContext<any>(null);

export function AuthProvider({ children }: any) {
  const { user, login, logout } = UseAuth();

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
