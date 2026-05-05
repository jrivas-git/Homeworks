export class MaxHeap {
  heap: any[];

  constructor() {
    this.heap = [];
  }

  push(item: any) {
    this.heap.push(item);
    this.heap.sort((a, b) => b.popularity - a.popularity);
  }

  getTopK(k: number) {
    return this.heap.slice(0, k);
  }
}
