class Node<T> {
  value: T
  next: Node<T> | null

  constructor(value: T) {
    this.value = value
    this.next = null
  }
}

class LinkedList<T> {
  head: Node<T> | null
  tail: Node<T> | null

  constructor() {
    this.head = null
    this.tail = null
  }

  append(value: T): void {
    const newNode = new Node(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail!.next = newNode
      this.tail = newNode
    }
  }

  print(): T[] {
    let current = this.head
    const result: T[] = []

    while (current) {
      result.push(current.value)
      current = current.next
    }

    return result
  }
}

export default LinkedList