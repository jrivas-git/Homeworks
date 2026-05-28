import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Game } from "../Types/Game";

interface FavoritesContextType {
  favorites: Game[];
  toggleFavorite: (game: Game) => void;
  isFavorite: (id: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | null>(null);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Game[]>(() => {
    const raw = localStorage.getItem("mini-store-favorites");
    return raw ? JSON.parse(raw) : [];
  });

  useEffect(() => {
    localStorage.setItem("mini-store-favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (game: Game) => {
    setFavorites((prev) => {
      const exists = prev.some((item) => item.id === game.id);
      return exists ? prev.filter((item) => item.id !== game.id) : [...prev, game];
    });
  };

  const isFavorite = (id: string) => favorites.some((game) => game.id === id);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavoritesContext = () => {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error("useFavoritesContext must be used inside FavoritesProvider");
  return context;
};