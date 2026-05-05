import { TriesNode } from "./TriesNode";

export class Tries {
  root: TriesNode;

  constructor() {
    this.root = new TriesNode();
  }


  insert(word: string, product: any) {
    let node = this.root;

    for (let char of word.toLowerCase()) {
      if (!node.children.has(char)) {
        node.children.set(char, new TriesNode());
      }
      node = node.children.get(char)!;
      node.products.push(product);
    }

    node.isEnd = true;
  }

  search(prefix: string) {
    let node = this.root;

    for (let char of prefix.toLowerCase()) {
      if (!node.children.has(char)) return [];
      node = node.children.get(char)!;
    }

    
    return node.products;
  }
}