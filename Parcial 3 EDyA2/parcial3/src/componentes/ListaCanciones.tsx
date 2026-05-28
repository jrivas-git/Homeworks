import type { Cancion } from "../tipos/cancion"


interface Props {
    canciones: Cancion[]
    seleccionar: (id: string) => void
}

export default function ListaCanciones({ canciones, seleccionar }: Props) {
    return (
        <section className="panel">
            <h2>Lista de canciones</h2>

            <div className="catalogo">
                {canciones.map((cancion) => (
                <button
                key={cancion.id}
                type="button"
                className="song-card"
                onClick={() => seleccionar(cancion.id)}>
                <strong>{cancion.titulo}</strong>
                <p className="texto-secundario">{cancion.artista}</p>
                <span className="pill">{cancion.genero}</span>
                <span className="texto-secundario">Popularidad: {cancion.popularidad}</span>
                </button>
                ))}
            </div>
        </section>
    )
}
