import { Link } from "react-router-dom";
import { useFavoritesContext } from "../Context/FavoritesContext";

export default function Favorites() {
  const { favorites } = useFavoritesContext();

  return (
    <div className="favorites-page">
      <h1>Favorites</h1>

      {favorites.length === 0 ? (
        <p className="muted">No favorites yet.</p>
      ) : (
        <div className="games-grid">
          {favorites.map((game) => (
            <Link key={game.id} to={`/game/${game.id}`} className="card">
              <img className="card-image" src={game.image} alt={game.title} />
              <div className="card-body">
                <h3>{game.title}</h3>
                <p>{game.genre}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}