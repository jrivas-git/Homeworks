export class Graph {
  nodes: any[];
  adjList: Record<string, any[]>;

  constructor() {
    this.nodes = [];
    this.adjList = {};
  }

  addNode(node: any) {
    this.nodes.push(node);
    this.adjList[node.id] = [];
  }

  addEdge(node1: string, node2: string) {
    this.adjList[node1].push(node2);
    this.adjList[node2].push(node1);
  }

  getPeopleByCity(cityId: string) {
    return this.adjList[cityId];
  }
}