import type { Game } from "../../Types/Game";

export class TrieNode {
  children: Map<string, TrieNode>;
  isEnd: boolean;
  games: Game[];

  constructor() {
    this.children = new Map();
    this.isEnd = false;
    this.games = [];
  }
}