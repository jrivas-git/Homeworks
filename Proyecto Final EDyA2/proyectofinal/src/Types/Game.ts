export interface Game {
  id: string;
  title: string;
  genre: string;
  platform: string;
  price: number;
  image: string;
  popularity: number;
  description: string;
}

export type GameInput = Omit<Game, "id">;