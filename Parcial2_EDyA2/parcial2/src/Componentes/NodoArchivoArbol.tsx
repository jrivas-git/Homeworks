import { useState } from "react"
import type { NodoArbol } from "../Arbol/Arbol"

interface Props {
  nodo: NodoArbol
  obtenerHijos: (id: string) => NodoArbol[]
  onSelect: (nodo: NodoArbol) => void
}
export default function NodoArchivoArbol({ nodo, obtenerHijos, onSelect }: Props) {
  const [abierto, setAbierto] = useState(false)
  const esCarpeta = nodo.tipo === "Carpeta"

  return (
    <div>
      <div
        className="node"
        onClick={() => {
          if (esCarpeta) setAbierto(!abierto);
          onSelect(nodo)
        }}
      >
        {esCarpeta ? "Carpeta:" : "Archivo:"} {nodo.nombre}
      </div>
      {esCarpeta && abierto && (
        <div className="children">
            <NodoArchivoArbol
              obtenerHijos={obtenerHijos}
              onSelect={onSelect}
            />
          ))
        </div>

      )}
    </div>
  )
}


