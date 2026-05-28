export class PurchaseQueue<T> {
  private queue: T[] = [];

  enqueue(item: T) {
    this.queue.push(item);
  }

  dequeue() {
    return this.queue.shift() ?? null;
  }

  getAll() {
    return [...this.queue];
  }

  clear() {
    this.queue = [];
  }
}