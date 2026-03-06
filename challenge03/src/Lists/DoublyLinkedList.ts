class Node<T> {
  value: T
  next: Node<T> | null
  prev: Node<T> | null

  constructor(value: T) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList<T> {
  head: Node<T> | null
  tail: Node<T> | null
  current: Node<T> | null

  constructor() {
    this.head = null
    this.tail = null
    this.current = null
  }

  append(value: T): void {
    const newNode = new Node(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      this.current = newNode
    } else {
      newNode.prev = this.tail
      if (this.tail) {
        this.tail.next = newNode
      }
      this.tail = newNode
    }
  }

  next(): T | undefined {
    if (this.current && this.current.next) {
      this.current = this.current.next
      return this.current.value
    }
    return this.current?.value
  }

  prev(): T | undefined {
    if (this.current && this.current.prev) {
      this.current = this.current.prev
      return this.current.value
    }
    return this.current?.value
  }

  peek(): T | undefined {
    return this.current?.value
  }
}

export default DoublyLinkedList