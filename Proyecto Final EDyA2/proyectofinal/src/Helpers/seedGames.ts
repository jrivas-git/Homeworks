import type { GameInput } from "../Types/Game";

export const seedGames: GameInput[] = [
  {
    title: "League of Legends",
    genre: "MOBA",
    platform: "PC",
    price: 0,
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Lol_logo.png",
    popularity: 98,
    description: "Competitive team-based game with champions, strategy, and online matches."
  },
  {
    title: "God of War",
    genre: "Action",
    platform: "PlayStation",
    price: 160000,
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/God_of_War_Logo.png",
    popularity: 95,
    description: "Action-adventure with intense combat and a cinematic story."
  },
  {
    title: "Fortnite",
    genre: "Battle Royale",
    platform: "PC",
    price: 0,
    image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Fortnite.png",
    popularity: 90,
    description: "Competitive online game with quick matches, building, and constant events."
  },
  {
    title: "Minecraft",
    genre: "Sandbox",
    platform: "PC",
    price: 90000,
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Minecraft_Alpha_screenshot.jpg",
    popularity: 99,
    description: "Open world game where you can build, explore and survive in a blocky environment."
  }
];