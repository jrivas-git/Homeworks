import graph from "../Data/graphData";
import GraphView from "../Components/GraphView";

export default function Inicio() {
  const personasEnCali = graph.getPeopleByCity("cali");

  return (
    <div style={{ padding: "20px", background: "#f0f0f0" }}>
      <h1>Grafo de Personas y Ciudades</h1>

      <h2>Personas en Cali</h2>
      <ul>
        {personasEnCali.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      <GraphView />
    </div>
  );
}