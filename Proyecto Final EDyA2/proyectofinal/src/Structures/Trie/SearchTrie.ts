import type { Game } from "../../Types/Game";
import { TrieNode } from "./TrieNode";

export class SearchTrie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string, game: Game) {
    if (!word) return;

    let node = this.root;

    for (const char of word.toLowerCase()) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char)!;
      node.games.push(game);
    }

    node.isEnd = true;
  }

  search(prefix: string) {
    let node = this.root;

    for (const char of prefix.toLowerCase()) {
      if (!node.children.has(char)) return [];
      node = node.children.get(char)!;
    }

    const unique = new Map<string, Game>();
    node.games.forEach((game) => unique.set(game.id, game));
    return [...unique.values()];
  }
}