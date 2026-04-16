import { createContext, useContext, useEffect, useState } from "react"
import { auth } from "../Firebase/Config"
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth"
import type { User } from "firebase/auth"
import type { ReactNode } from "react"

interface TipoAuth {
  usuario: User | null
  login: (correo: string, pass: string) => Promise<void>
  registrar: (correo: string, pass: string) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<TipoAuth | null>(null)
export const ProveedorAuth = ({ children }: { children: ReactNode }) => {
  const [usuario, setUsuario] = useState<User | null>(null)

  useEffect(() => {
    return onAuthStateChanged(auth, setUsuario)
  }, [])
  const login = async (correo: string, pass: string) => {
    await signInWithEmailAndPassword(auth, correo, pass)
  }
  const registrar = async (correo: string, pass: string) => {
    await createUserWithEmailAndPassword(auth, correo, pass)
  }

  const logout = async () => {
    await signOut(auth)
  }


  return (
    <AuthContext.Provider value={{ usuario, login, registrar, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
export const usarAuth = () => {
  const uctx = useContext(AuthContext)
  if (!uctx) throw new Error("Error en AuthContext")
  return uctx
};
