import { useState } from "react";
import trie from "../Data/productos";
import { MaxHeap } from "../Heap/MaxHeap";

export default function Inicio() {
  const [busqueda, setBusqueda] = useState("");
  const [resultados, setResultados] = useState<any[]>([]);

  const buscar = () => {
    const encontrados = trie.search(busqueda);

    const heap = new MaxHeap();
    encontrados.forEach(p => heap.push(p));

    setResultados(heap.getTopK(2));
  };



  return (
    <div style={{ padding: "20px" }}>
      <h1>Buscador Inteligente</h1>

      <input
        placeholder="Buscar..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <button onClick={buscar}>Buscar</button>

      <ul>
        {resultados.map((r, i) => (
          <li key={i}>
            {r.name} - Popularidad: {r.popularity}
          </li>
        ))}
      </ul>
    </div>
  );
}
