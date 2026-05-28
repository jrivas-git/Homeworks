import type { Cancion } from "../tipos/cancion"


interface Props {canciones: Cancion[]}

export default function CancionesRelacionadas({ canciones }: Props) {
    return (
    <section className="panel">
        <h2>Canciones relacionadas</h2>
        
        {canciones.length === 0 ? (
            <p className="texto-secundario">No hay canciones relacionadas para mostrar.</p>) : (
            <div className="related-list">
                {canciones.map((cancion) => (
                    <article key={cancion.id} className="related-item">
                        <strong>{cancion.titulo}</strong>
                        <p className="texto-secundario">{cancion.artista}</p>
                    </article>
                ))}
            </div>
      )}
    </section>
    )
}
