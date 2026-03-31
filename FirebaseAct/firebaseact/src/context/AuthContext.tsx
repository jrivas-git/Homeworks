import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { auth } from "../firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import type { User } from "firebase/auth";

interface AuthContextType {
  user: User | null;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("AuthContext no disponible");
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsub();
  }, []);

  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};