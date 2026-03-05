class Node<A> {
    value: A
    next: Node<A> | null = null
    prev: Node<A> | null = null
  append: any
    constructor(value: A) {
        this.value = value
    }
}

class ListaCircularDobleEnlazada<A> {
    head: Node<A> | null = null
    append(value: A) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            newNode.next = newNode
            newNode.prev = newNode
        } else {
            const tail = this.head.prev!
            tail.next = newNode
            newNode.prev = tail
            newNode.next = this.head
            this.head.prev = newNode
        }
    }
}

export default ListaCircularDobleEnlazada
