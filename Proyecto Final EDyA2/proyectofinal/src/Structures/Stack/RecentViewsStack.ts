export class RecentViewsStack {
  private stack: string[] = [];

  push(item: string) {
    this.stack.push(item);
  }

  pop() {
    return this.stack.pop() ?? null;
  }

  peek() {
    return this.stack.length ? this.stack[this.stack.length - 1] : null;
  }

  getAll() {
    return [...this.stack].reverse();
  }
}