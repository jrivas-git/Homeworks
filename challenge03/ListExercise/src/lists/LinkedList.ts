class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList<T> {
  head: Node<T> | null = null;
  current: Node<T> | null = null;

  append(value: T) {
    const newNode = new Node(value);

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
  }

  next() {
    if (this.current?.next) {
      this.current = this.current.next;
    }
  }

  getCurrent() {
    return this.current?.value;
  }
}