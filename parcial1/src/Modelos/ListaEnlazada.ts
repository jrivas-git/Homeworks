class Node<A> {
    value: A
    next: Node<A> | null = null
  append: any
  remove: any
    constructor(value: A) {
        this.value = value
    }
}

class ListaEnlazada<A> {
    head: Node<A> | null = null
  remove: any
    append(value: A) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
        }
        let current = this.head
        while (current.next) {
            current = current.next
        }
        current.next = newNode
    }
}

export default ListaEnlazada
