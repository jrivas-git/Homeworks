import { Link } from "react-router-dom";
import type { Game } from "../../Types/Game";
import { formatPrice } from "../../Helpers/formatPrice";
import { useCartContext } from "../../Context/CartContext";
import FavoriteButton from "../User/FavoriteButton";

interface Props {
  game: Game;
}

export default function GameCard({ game }: Props) {
  const { addToCart } = useCartContext();

  return (
    <article className="card">
      <Link to={`/game/${game.id}`}>
        <img className="card-image" src={game.image} alt={game.title} />
      </Link>

      <div className="card-body">
        <h3>{game.title}</h3>
        <p>
          {game.genre} · {game.platform}
        </p>
        <p className="price">{formatPrice(game.price)}</p>
        <p className="muted">{game.description}</p>

        <div className="card-actions">
          <button className="btn" onClick={() => addToCart(game)}>
            Add to cart
          </button>
          <FavoriteButton game={game} />
        </div>
      </div>
    </article>
  );
}