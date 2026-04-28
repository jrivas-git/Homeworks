import { Graph } from "../Graph/Graph";

const graph = new Graph();

graph.addNode({ id: "cali", tipo: "ciudad", nombre: "Cali" });
graph.addNode({ id: "bogota", tipo: "ciudad", nombre: "Bogotá" });

graph.addNode({ id: "juan", tipo: "persona", nombre: "Juan", edad: 20 });
graph.addNode({ id: "ana", tipo: "persona", nombre: "Ana", edad: 22 });

graph.addEdge("juan", "cali");
graph.addEdge("ana", "bogota");

export default graph;