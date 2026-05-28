import { useMemo, useState } from "react"
import BuscadorCanciones from "../componentes/BuscadorCanciones"
import RankingTop from "../componentes/RankingTop"
import ListaCanciones from "../componentes/ListaCanciones"
import CancionesRelacionadas from "../componentes/CancionesRelacionadas"
import FormularioCancion from "../componentes/FormularioCancion"
import { cancionesIniciales } from "../datos/canciones"
import { TrieCanciones } from "../estructuras/trie/TrieCanciones"
import { HeapMaximo } from "../estructuras/heap/HeapMaximo"
import { GrafoCanciones } from "../estructuras/grafo/GrafoCanciones"
import type { Cancion, EntradaCancion } from "../tipos/cancion"


export default function Inicio() {
    const [canciones, setCanciones] = useState<Cancion[]>(
        cancionesIniciales.map((cancion, index) => ({
        id: String(index + 1), ...cancion
        }))
    )

    const [busqueda, setBusqueda] = useState("")
    const [cancionSeleccionada, setCancionSeleccionada] = useState<string>("1")
    const trie = useMemo(() => {
        const estructura = new TrieCanciones()
        canciones.forEach((cancion) => {
            estructura.insertar(cancion)
        })
        return estructura
    }, [canciones])

    const heap = useMemo(() => {
        return new HeapMaximo(canciones)
    }, [canciones])


    const grafo = useMemo(() => {
        const estructura = new GrafoCanciones()
        canciones.forEach((cancion) => {
            estructura.agregarCancion(cancion.id)
            cancion.relacionadas.forEach((id) => {
                estructura.conectar(cancion.id, id)
            })
        })
        return estructura
    }, [canciones])


    const sugerencias = trie.sugerencias(busqueda)
    const existe = busqueda.trim() ? trie.existe(busqueda) : null
    const topCanciones = heap.obtenerTop(5)
    const relacionadasIds = grafo.obtenerRelacionadas(cancionSeleccionada)
    const cancionesRelacionadas = canciones.filter((cancion) => relacionadasIds.includes(cancion.id))
    const agregarCancion = (entrada: EntradaCancion) => {
        const nuevaCancion: Cancion = {
            id: Date.now().toString(), ...entrada
        }
        setCanciones((prev) => [...prev, nuevaCancion])
    }

    return (
        <main className="contenedor">
            <header className="hero">
                <h1>Spotify Mini Plataforma</h1>
                <p>Busca tus canciones favoritas y encuentra las mejores recomendaciones</p>
            </header>
            <div className="grid">
                <BuscadorCanciones
                busqueda={busqueda}
                cambiarBusqueda={setBusqueda}
                existe={existe}/>
                <RankingTop canciones={topCanciones} />
                <ListaCanciones canciones={sugerencias.length ? sugerencias : canciones} seleccionar={setCancionSeleccionada}/>
                <CancionesRelacionadas canciones={cancionesRelacionadas}/>
                <FormularioCancion agregarCancion={agregarCancion}/>
            </div>
        </main>
    )
}
