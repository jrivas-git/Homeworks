import { useState } from "react"
import type { EntradaCancion } from "../tipos/cancion"

interface Props {agregarCancion: (cancion: EntradaCancion) => void}


export default function FormularioCancion({ agregarCancion }: Props) {
    const [titulo, setTitulo] = useState("")
    const [artista, setArtista] = useState("")
    const [genero, setGenero] = useState("")
    const [popularidad, setPopularidad] = useState(0)
    const [relacionadas, setRelacionadas] = useState("")

    const manejarSubmit = (e: React.FormEvent) => {
        e.preventDefault()

    agregarCancion({titulo, artista, genero, popularidad, relacionadas: relacionadas
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean)
    })}

    return (
        <section className="panel">
            <h2>Agregar canciones</h2>

        <form className="form" onSubmit={manejarSubmit}>
            <input
            className="input"
            type="text"
            placeholder="Título"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}/>


            <input
            className="input"
            type="text"
            placeholder="Artista"
            value={artista}
            onChange={(e) => setArtista(e.target.value)}/>

            <input
            className="input"
            type="text"
            placeholder="Género"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}/>


            <input
            className="input"
            type="number"
            placeholder="Popularidad"
            value={popularidad}
            onChange={(e) => setPopularidad(Number(e.target.value))}/>

            <input
            className="input"
            type="text"
            placeholder="Relacionadas (ids separados por coma)"
            value={relacionadas}
            onChange={(e) => setRelacionadas(e.target.value)}/>

            <button className="btn" type="submit">Guardar</button>
        </form>
    </section>
    )
}

