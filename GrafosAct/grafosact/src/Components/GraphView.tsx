// @ts-ignore
import { Graph } from "react-d3-graph";

const data = {
  nodes: [
    { id: "Cali" },
    { id: "Bogotá" },
    { id: "Juan" },
    { id: "Ana" }
  ],
  links: [
    { source: "Juan", target: "Cali" },
    { source: "Ana", target: "Bogotá" }
  ]
};

const config = {
  directed: false,
  height: 400,
  width: 600,
  nodeHighlightBehavior: true,
  node: {
    color: "lightblue",
    size: 300
  },
  link: {
    highlightColor: "blue"
  }
};

export default function GraphView() {
  return (
    <div style={{ background: "white" }}>
      <Graph id="graph" data={data} config={config} />
    </div>
  );
}