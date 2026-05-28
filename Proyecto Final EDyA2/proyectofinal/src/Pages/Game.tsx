import { useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { useGames } from "../Hooks/useGames";
import Loader from "../Components/Shared/Loader";
import FavoriteButton from "../Components/User/FavoriteButton";
import RecommendationList from "../Components/Games/RecommendationList";
import { useCartContext } from "../Context/CartContext";
import { buildRecommendationGraph } from "../Helpers/recommendationGraph";

export default function Game() {
  const { id } = useParams();
  const { games, loading } = useGames();
  const { addToCart } = useCartContext();

  const game = games.find((item) => item.id === id);

  useEffect(() => {
    if (game) document.title = game.title;
  }, [game]);

  const recommendations = useMemo(() => {
    if (!game) return [];
    const graph = buildRecommendationGraph(games);
    const ids = graph.getRecommendations(game.id);
    return games
      .filter((item) => ids.includes(item.id) && item.id !== game.id)
      .slice(0, 4);
  }, [games, game]);

  if (loading) return <Loader />;
  if (!game) return <p>Game not found.</p>;

  return (
    <div className="game-detail">
      <Link to="/store" className="back-link">
        ← Back to store
      </Link>

      <div className="game-detail-grid">
        <img className="detail-image" src={game.image} alt={game.title} />

        <div>
          <h1>{game.title}</h1>
          <p>
            {game.genre} · {game.platform}
          </p>
          <p className="muted">{game.description}</p>

          <div className="card-actions">
            <button className="btn" onClick={() => addToCart(game)}>
              Add to cart
            </button>
            <FavoriteButton game={game} />
          </div>
        </div>
      </div>

      <section className="section">
        <h2>Recommendations</h2>
        <RecommendationList games={recommendations} />
      </section>
    </div>
  );
}