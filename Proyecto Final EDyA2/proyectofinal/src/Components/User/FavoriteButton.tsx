import type { Game } from "../../Types/Game";
import { useFavoritesContext } from "../../Context/FavoritesContext";

interface Props {
  game: Game;
}

export default function FavoriteButton({ game }: Props) {
  const { toggleFavorite, isFavorite } = useFavoritesContext();
  const active = isFavorite(game.id);

  return (
    <button
      className={`btn ${active ? "btn-secondary" : ""}`}
      onClick={() => toggleFavorite(game)}
      type="button"
    >
      {active ? "Remove favorite" : "Add favorite"}
    </button>
  );
}