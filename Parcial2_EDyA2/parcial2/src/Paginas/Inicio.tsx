import { useState } from "react"
import { usarArchivoArbol } from "../Hook/UsarArchivoArbol"
import { usarAuth } from "../Context/AuthContext"
import BarraLateral from "../Componentes/BarraLateral"
import type { NodoArbol } from "../Arbol/Arbol"

export default function Inicio() {
  const { agregarNodo } = usarArchivoArbol()
  const { usuario, logout } = usarAuth()
  const [nombre, setNombre] = useState("")
  const [tipo, setTipo] = useState<"Archivo" | "Carpeta">("Archivo")
  const [seleccionado, setSeleccionado] = useState<NodoArbol | null>(null)
  const crear = async () => {
    if (!usuario) return alert("Debe iniciar sesión")
    if (!nombre.trim()) return alert("Ingrese un nombre")
    await agregarNodo({
      nombre,
      tipo,
      usuario: usuario.email!,
      padreId: seleccionado?.id || null
    })
  }


  return (
    <div className="container">
      <BarraLateral onSelect={setSeleccionado} />
      <div className="content">
        <h2>Crear</h2>

        <p>
          Carpeta seleccionada:{" "}
          {seleccionado ? seleccionado.nombre : "Ninguna"}
        </p>


        <input
          placeholder="Nombre del archivo o carpeta"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        /> 
          <option value="Archivo">Archivo</option>
          <option value="Carpeta">Carpeta</option>
        <button onClick={crear}>Crear</button>
        <button onClick={logout}>Cerrar sesión</button>
      </div>
    </div>
  )
}
