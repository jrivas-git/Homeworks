class Node<A> {
    append(_rentado: any) {
      throw new Error("Method not implemented.")
    }
    value: A
    next: Node<A> | null = null
    prev: Node<A> | null = null
    constructor(value: A) {
        this.value = value
    }
}

class ListaDobleEnlazada<A> {
    head: Node<A> | null = null
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
        newNode.prev = current
    }
}

export default ListaDobleEnlazada
