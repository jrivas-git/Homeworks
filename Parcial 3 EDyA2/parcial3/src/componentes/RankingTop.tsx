import type { Cancion } from "../tipos/cancion"

interface Props {canciones: Cancion[]}

export default function RankingTop({ canciones }: Props) {
    return (
        <section className="panel">
            <h2>Ranking Top Canciones</h2>

            <div className="ranking-lista">
                {canciones.map((cancion, indice) => (
                <article key={cancion.id} className="ranking-item">
                <span className="rank">#{indice + 1}</span>

            <div>
                <strong>{cancion.titulo}</strong>
                <p className="texto-secundario">{cancion.artista} · {cancion.genero}</p>
            </div>
                <span className="score">{cancion.popularidad}</span>
                </article>
            ))}
            </div>
        </section>
    )
}

