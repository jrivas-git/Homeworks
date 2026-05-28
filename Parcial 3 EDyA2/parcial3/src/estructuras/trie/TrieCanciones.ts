import type { Cancion } from "../../tipos/cancion"
import { normalizarTexto } from "../../helpers/normalizarTexto"
import { NodoTrie } from "./NodoTrie"

export class TrieCanciones {
    raiz: NodoTrie
    constructor() {
        this.raiz = new NodoTrie()
    }
    insertar(cancion: Cancion) {
        const titulo = normalizarTexto(cancion.titulo)
        let nodo = this.raiz
        for (const letra of titulo) {
            if (!nodo.hijos.has(letra)) {
            nodo.hijos.set(letra, new NodoTrie())
            }
            nodo = nodo.hijos.get(letra)!
            nodo.canciones.push(cancion)
        }
        nodo.finPalabra = true
    }

    existe(titulo: string) {
        const texto = normalizarTexto(titulo)
        let nodo = this.raiz
        
        for (const letra of texto) {
            if (!nodo.hijos.has(letra)) {
            return false
            }
        nodo = nodo.hijos.get(letra)!
        }
        return nodo.finPalabra
    }


    sugerencias(prefijo: string) {
        const texto = normalizarTexto(prefijo)
        let nodo = this.raiz
        for (const letra of texto) {
            if (!nodo.hijos.has(letra)) {
            return []
            }
            
            nodo = nodo.hijos.get(letra)!
        }


    const unicas = new Map<string, Cancion>()
    nodo.canciones.forEach((cancion) => {
        unicas.set(cancion.id, cancion)
    })
    return [...unicas.values()]
    }
}
