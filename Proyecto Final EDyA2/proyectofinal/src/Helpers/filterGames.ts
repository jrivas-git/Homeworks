import type { Game } from "../Types/Game";

export interface GameFilters {
  genre?: string;
  platform?: string;
  maxPrice?: number;
}

export const filterGames = (games: Game[], filters: GameFilters) => {
  return games.filter((game) => {
    const genreOk = filters.genre ? game.genre === filters.genre : true;
    const platformOk = filters.platform ? game.platform === filters.platform : true;
    const priceOk = filters.maxPrice ? game.price <= filters.maxPrice : true;
    return genreOk && platformOk && priceOk;
  });
};