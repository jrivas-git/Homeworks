import { useEffect, useState } from "react"
import { usarArchivoArbol } from "../Hook/UsarArchivoArbol"
import NodoArchivoArbol from "./NodoArchivoArbol"
import type { NodoArbol } from "../Arbol/Arbol"

interface Props {
  onSelect: (nodo: NodoArbol) => void
}

export default function BarraLateral({ onSelect }: Props) {
  const { obtenerArbol } = usarArchivoArbol()
  const cargar = async () => {
    const data = await obtenerArbol()
  }
  useEffect(() => {
    cargar()
  }, [])

  return (
    <div className="barralateral">
      <h3>Sistema</h3>

        <NodoArchivoArbol
          onSelect={onSelect}
        />
    </div>
  )
}
