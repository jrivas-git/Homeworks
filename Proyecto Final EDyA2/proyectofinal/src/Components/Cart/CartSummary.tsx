import { formatPrice } from "../../Helpers/formatPrice";
import type { Game } from "../../Types/Game";

interface Props {
  items: Game[];
  onCheckout: () => void;
}

export default function CartSummary({ items, onCheckout }: Props) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <aside className="cart-summary">
      <h3>Summary</h3>
      <p>Items: {items.length}</p>
      <p>Total: {formatPrice(total)}</p>
      <button className="btn" onClick={onCheckout} disabled={!items.length}>
        Checkout
      </button>
    </aside>
  );
}