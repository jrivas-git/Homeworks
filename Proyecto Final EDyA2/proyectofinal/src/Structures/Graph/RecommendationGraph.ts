export class RecommendationGraph {
  graph: Record<string, Set<string>> = {};

  addGame(gameId: string) {
    if (!this.graph[gameId]) this.graph[gameId] = new Set();
  }

  connect(gameA: string, gameB: string) {
    this.addGame(gameA);
    this.addGame(gameB);
    this.graph[gameA].add(gameB);
    this.graph[gameB].add(gameA);
  }

  getRecommendations(gameId: string) {
    return Array.from(this.graph[gameId] ?? []);
  }
}