import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Game } from "../Types/Game";

interface CartContextType {
  cart: Game[];
  addToCart: (game: Game) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Game[]>(() => {
    const raw = localStorage.getItem("mini-store-cart");
    return raw ? JSON.parse(raw) : [];
  });

  useEffect(() => {
    localStorage.setItem("mini-store-cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (game: Game) => {
    setCart((prev) => {
      if (prev.some((item) => item.id === game.id)) return prev;
      return [...prev, game];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((game) => game.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCartContext must be used inside CartProvider");
  return context;
};