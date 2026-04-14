import { useState } from "react";
import Sidebar from "./components/Sidebar";
import type { MenuNode } from "./tree/Tree";

function App() {
  const [selected, setSelected] = useState<MenuNode | null>(null);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar onSelect={setSelected} />

      <div style={{ padding: "2rem", flex: 1 }}>
        <h1>Contenido</h1>

        {selected ? (
          <div>
            <h2>{selected.title}</h2>
            <p>{selected.content}</p>
          </div>
        ) : (
          <p>Selecciona una opción del menú</p>
        )}
      </div>
    </div>
  );
}

export default App;