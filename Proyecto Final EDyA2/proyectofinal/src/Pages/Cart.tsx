import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useMemo } from "react";
import { db } from "../Firebase/config";
import { useCartContext } from "../Context/CartContext";
import { useAuthContext } from "../Context/AuthContext";
import CartItem from "../Components/Cart/CartItem";
import CartSummary from "../Components/Cart/CartSummary";
import { PurchaseQueue } from "../Structures/Queue/PurchaseQueue";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCartContext();
  const { user } = useAuthContext();
  const queue = useMemo(() => new PurchaseQueue<typeof cart[number]>(), []);

  const handleCheckout = async () => {
    cart.forEach((item) => queue.enqueue(item));

    await addDoc(collection(db, "orders"), {
      userId: user?.uid ?? null,
      email: user?.email ?? null,
      items: queue.getAll(),
      total: cart.reduce((sum, item) => sum + item.price, 0),
      createdAt: serverTimestamp(),
    });

    queue.clear();
    clearCart();
    alert("Order created successfully");
  };

  return (
    <div className="cart-page">
      <h1>Cart</h1>

      <div className="cart-layout">
        <div className="cart-items">
          {cart.length === 0 ? (
            <p className="muted">Your cart is empty.</p>
          ) : (
            cart.map((game) => (
              <CartItem key={game.id} game={game} onRemove={removeFromCart} />
            ))
          )}
        </div>

        <CartSummary items={cart} onCheckout={handleCheckout} />
      </div>
    </div>
  );
}