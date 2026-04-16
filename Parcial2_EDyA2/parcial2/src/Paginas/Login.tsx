import { useState } from "react"
import { usarAuth } from "../Context/AuthContext"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const { login, registrar } = usarAuth()
  const navigate = useNavigate()
  const [correo, setCorreo] = useState("")
  const [pass, setPass] = useState("")
  const handleLogin = async () => {
    try {
      await login(correo, pass)
      navigate("/inicio")
    } catch (error: any) {
      alert("Error login: " + error.message)
    }
  }


  const handleRegister = async () => {
    try {
      await registrar(correo, pass)
      alert("Usuario creado correctamente")
      navigate("/inicio")
    } catch (error: any) {
      alert("Error registro: " + error.message)
    }
  }
  return (
    <div>
      <h2>Login</h2>


      <input
        placeholder="Correo"
        onChange={(e) => setCorreo(e.target.value)}
      />

      <input
        type="password"
        placeholder="Contraseña"
        onChange={(e) => setPass(e.target.value)}
      />


      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegister}>Registrar</button>
    </div>
  )
}

