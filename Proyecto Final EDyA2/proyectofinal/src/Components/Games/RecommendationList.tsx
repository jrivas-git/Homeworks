import { Link } from "react-router-dom";
import type { Game } from "../../Types/Game";

interface Props {
  games: Game[];
}

export default function RecommendationList({ games }: Props) {
  if (!games.length) {
    return <p className="muted">No recommendations available.</p>;
  }

  return (
    <div className="recommendation-list">
      {games.map((game) => (
        <Link key={game.id} to={`/game/${game.id}`} className="recommendation-item">
          <img src={game.image} alt={game.title} />
          <div>
            <strong>{game.title}</strong>
            <p>
              {game.genre} · {game.platform}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}