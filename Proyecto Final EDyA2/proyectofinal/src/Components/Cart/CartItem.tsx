import type { Game } from "../../Types/Game";
import { formatPrice } from "../../Helpers/formatPrice";

interface Props {
  game: Game;
  onRemove: (id: string) => void;
}

export default function CartItem({ game, onRemove }: Props) {
  return (
    <div className="cart-item">
      <img src={game.image} alt={game.title} />
      <div>
        <h3>{game.title}</h3>
        <p>{formatPrice(game.price)}</p>
      </div>
      <button className="btn btn-secondary" onClick={() => onRemove(game.id)}>
        Remove
      </button>
    </div>
  );
}