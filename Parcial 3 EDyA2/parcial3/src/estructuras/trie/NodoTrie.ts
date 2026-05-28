import type { Cancion } from "../../tipos/cancion"


export class NodoTrie {
    hijos: Map<string, NodoTrie>
    finPalabra: boolean
    canciones: Cancion[]
    constructor() {
        this.hijos = new Map()
        this.finPalabra = false
        this.canciones = []
    }
}