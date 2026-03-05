export class Node<A> {
    head: any;
    append(_arg0: { id: number; nombre: string; precio: number }) {
      throw new Error("Method not implemented.")
    }
    value: A
    next: Node<A> | null = null
    constructor(value: A) {
        this.value = value
    }
}

export class ListaCircular<A> {
    head: Node<A> | null = null
    append(value: A) {
    const newNode = new Node(value)
    if (!this.head) {
        this.head = newNode
        newNode.next = newNode
    }
    let current = this.head
    while (current.next !== this.head) {
        current = current.next!
    }
    current.next = newNode
    newNode.next = this.head
    }
}
