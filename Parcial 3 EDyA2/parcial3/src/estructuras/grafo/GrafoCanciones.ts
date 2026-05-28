export class GrafoCanciones {
    private grafo: Map<string, Set<string>> = new Map()

    agregarCancion(id: string) {
        if (!this.grafo.has(id)) {
            this.grafo.set(id, new Set())
        }
    }

    conectar(a: string, b: string) {
        if (a === b) return
        this.agregarCancion(a)
        this.agregarCancion(b)
        this.grafo.get(a)?.add(b)
        this.grafo.get(b)?.add(a)
    }


    obtenerRelacionadas(id: string) {
        return [...(this.grafo.get(id) || [])]
    }
}

