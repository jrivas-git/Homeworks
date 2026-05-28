import type { Game } from "../../Types/Game";
import GameCard from "./GameCard";

interface Props {
  games: Game[];
}

export default function GameGrid({ games }: Props) {
  return (
    <div className="games-grid">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}