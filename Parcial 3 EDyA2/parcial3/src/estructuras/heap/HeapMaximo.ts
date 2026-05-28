import type { Cancion } from "../../tipos/cancion"


export class HeapMaximo {
    private heap: Cancion[] = []
    constructor(canciones: Cancion[] = []) {
        canciones.forEach((cancion) => this.insertar(cancion))
    }

    private intercambiar(i: number, j: number) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    private subir(indice: number) {
        let actual = indice
        
        while (actual > 0) {
            const padre = Math.floor((actual - 1) / 2)
            if (
                this.heap[padre].popularidad >= this.heap[actual].popularidad) {
                    break
                }
                this.intercambiar(actual, padre)
                actual = padre
            }
        }

    insertar(cancion: Cancion) {
        this.heap.push(cancion)
        this.subir(this.heap.length - 1)
    }
    obtenerTop(cantidad: number) {
        return [...this.heap]
        .sort((a, b) => b.popularidad - a.popularidad)
        .slice(0, cantidad)
    }
}

