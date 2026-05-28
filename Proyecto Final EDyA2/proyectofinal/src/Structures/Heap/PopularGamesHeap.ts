import type { Game } from "../../Types/Game";

export class PopularGamesHeap {
  private heap: Game[] = [];

  constructor(items: Game[] = []) {
    items.forEach((item) => this.insert(item));
  }

  private swap(i: number, j: number) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  private percolateUp(index: number) {
    let current = index;
    while (current > 0) {
      const parent = Math.floor((current - 1) / 2);
      if (this.heap[parent].popularity >= this.heap[current].popularity) break;
      this.swap(parent, current);
      current = parent;
    }
  }

  private percolateDown(index: number) {
    let current = index;
    while (true) {
      const left = current * 2 + 1;
      const right = current * 2 + 2;
      let largest = current;

      if (left < this.heap.length && this.heap[left].popularity > this.heap[largest].popularity) largest = left;
      if (right < this.heap.length && this.heap[right].popularity > this.heap[largest].popularity) largest = right;
      if (largest === current) break;

      this.swap(current, largest);
      current = largest;
    }
  }

  insert(game: Game) {
    this.heap.push(game);
    this.percolateUp(this.heap.length - 1);
  }

  peek() {
    return this.heap.length ? this.heap[0] : null;
  }

  pop() {
    if (!this.heap.length) return null;
    if (this.heap.length === 1) return this.heap.pop() ?? null;

    const top = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.percolateDown(0);
    return top;
  }

  getTop(k: number) {
    const clone = new PopularGamesHeap(this.heap);
    const result: Game[] = [];

    while (result.length < k && clone.peek()) {
      result.push(clone.pop()!);
    }

    return result;
  }
}