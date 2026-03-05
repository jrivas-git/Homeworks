import { useState, useEffect } from "react"
import ListaEnlazada from "./Modelos/ListaEnlazada"
import ListaDobleEnlazada from "./Modelos/ListaDobleEnlazada"
import { ListaCircular, Node } from "./Modelos/ListaCircular"
import ListaCircularDobleEnlazada from "./Modelos/ListaCircularDobleEnlazada"
import Vehiculos from "./Componentes/Vehiculos"

interface Vehiculo {
  id: number
  nombre: string
  precio: number
}

function App() {
   const [disponible] = useState(() => {
    const lista = new ListaEnlazada<Vehiculo>()

    lista.append({ id: 2, nombre: "Camioneta Toyota", precio: 950000 })
    lista.append({ id: 3, nombre: "Bicicleta", precio: 25000 })
    lista.append({ id: 5, nombre: "Auto Chevrolet", precio: 3200000 })

    return lista
  })
  
  const [historial] = useState(() => new ListaDobleEnlazada<Vehiculo>())

  const [destacados] = useState(() => {
    const lista = new ListaCircular<Vehiculo>()

    lista.append({ id: 7, nombre: "Auto Corvette", precio: 12000000 })
    lista.append({ id: 4, nombre: "Motocicleta MT09", precio: 5700000 })
    lista.append({ id: 5, nombre: "Camioneta Urus", precio: 9500000 })

    return lista
  })

  const [] = useState(() => {
    const lista = new ListaCircularDobleEnlazada<string>()

    lista.append("Juan")
    lista.append("Sofia")
    lista.append("Esteban")

    return lista
  })

  const [current, setCurrent] = useState<Node<Vehiculo> | null>(null)

  useEffect(() => {
    if (destacados.head) {
      setCurrent(destacados.head)
    }
  }, [destacados])

  useEffect(() => {
    const interval = setInterval(() => {
      if (current) {
        setCurrent(current.next)
      }
    }, 5000)

    return () => clearInterval(interval);
  }, [current])

  const siguienteVehiculo = () => {
    if (current) {
      setCurrent(current.next)
    }
  }

  const rentarVehiculo = () => {
    const rentado = disponible.remove()
    if (rentado) {
      historial.append(rentado)
      alert("El Vehiculo ha sido rentado y subido al historial")
    }
  }

  return (
    <div>
      <h1>Sistema Urbano de Movilidad</h1>
      {current && (
        <Vehiculos
          vehiculo={current.value}
          onSiguiente={siguienteVehiculo}
          onRentar={rentarVehiculo}
        />
      )}
    </div>
  )
}

export default App
