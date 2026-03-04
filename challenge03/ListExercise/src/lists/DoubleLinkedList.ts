class DNode<T> {
  value: T;
  next: DNode<T> | null = null;
  prev: DNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

export class DoubleLinkedList<T> {
  head: DNode<T> | null = null;
  current: DNode<T> | null = null;

  append(value: T) {
    const newNode = new DNode(value);

    if (!this.head) {
      this.head = newNode;
      this.current = newNode;
      return;
    }

    let temp = this.head;
    while (temp.next) {
      temp = temp.next;
    }

    temp.next = newNode;
    newNode.prev = temp;
  }

  next() {
    if (this.current?.next) {
      this.current = this.current.next;
    }
  }

  prev() {
    if (this.current?.prev) {
      this.current = this.current.prev;
    }
  }

  getCurrent() {
    return this.current?.value;
  }
}