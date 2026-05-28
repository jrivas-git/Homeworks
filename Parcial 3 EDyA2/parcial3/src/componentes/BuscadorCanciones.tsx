interface Props {busqueda: string
    cambiarBusqueda: (valor: string) => void
    existe: boolean | null
}


export default function BuscadorCanciones({busqueda, cambiarBusqueda, existe}: Props) {
    return (
        <section className="panel">
            <h2>Buscador de canciones</h2>

            <input className="input"
            type="text"
            placeholder="Buscar canción..."
            value={busqueda}
            onChange={(e) => cambiarBusqueda(e.target.value)}/>


        <div className="estado">
        {busqueda.trim() === "" ? (
          <p className="texto-secundario">Escribe para buscar canciones</p>) : existe ? (
          <p className="correcto">La canción existe</p>) : (
          <p className="incorrecto">No existe una canción con ese nombre</p>
        )}
        </div>
    </section>
    )
}

