class Queue<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  enqueue(value: T): void {
    this.items.push(value);
  }

  dequeue(): T | null {
    return this.items.length > 0 ? this.items.shift()! : null;
  }

  peek(): T | null {
    return this.items.length > 0 ? this.items[0] : null;
  }

  size(): number {
    return this.items.length;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  getAll(): T[] {
    return [...this.items];
  }
}

export default Queue;