interface Vehiculo {
    id: number
    nombre: string
    precio: number
}

interface Props {
    vehiculo: Vehiculo
    onSiguiente: () => void
    onRentar: () => void
}

function Vehiculos({ vehiculo, onSiguiente, onRentar }: Props) {
    return (
      <div>
        <h2>{vehiculo.nombre}</h2>
        <p>Precio: ${vehiculo.precio}</p>
        <button onClick={onRentar}>Rentar</button>
        <button onClick={onSiguiente}>Siguiente</button>
      </div>
    )
}

export default Vehiculos
