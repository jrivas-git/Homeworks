export class TriesNode {
  children: Map<string, TriesNode>;
  isEnd: boolean;
  products: any[];


  constructor() {
    this.children = new Map();
    this.isEnd = false;
    this.products = [];
  }
}
