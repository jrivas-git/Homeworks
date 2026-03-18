class Stack<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  push(value: T): void {
    this.items.push(value);
  }

  pop(): T | null {
    return this.items.length > 0 ? this.items.pop()! : null;
  }

  peek(): T | null {
    return this.items.length > 0
      ? this.items[this.items.length - 1]
      : null;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  getAll(): T[] {
    return [...this.items].reverse()
  }
}

export default Stack;