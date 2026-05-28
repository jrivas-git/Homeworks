import type { Game } from "../Types/Game";
import { RecommendationGraph } from "../Structures/Graph/RecommendationGraph";

export const buildRecommendationGraph = (games: Game[]) => {
  const graph = new RecommendationGraph();

  games.forEach((game) => graph.addGame(game.id));

  for (let i = 0; i < games.length; i++) {
    for (let j = i + 1; j < games.length; j++) {
      const a = games[i];
      const b = games[j];
      if (a.genre === b.genre || a.platform === b.platform) {
        graph.connect(a.id, b.id);
      }
    }
  }

  return graph;
};