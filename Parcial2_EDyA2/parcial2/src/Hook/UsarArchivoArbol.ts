import { db } from "../Firebase/Config"
import { collection, addDoc, getDocs } from "firebase/firestore"
import type { NodoArbol } from "../Arbol/Arbol"

const referencia = collection(db, "archivos")
export const usarArchivoArbol = () => {
  const obtenerArbol = async () => {
    const snapshot = await getDocs(referencia)
    return snapshot.docs.map(doc => ({
    })) as NodoArbol[]
  }
  const agregarNodo = async (nodo: NodoArbol) => {
    await addDoc(referencia, nodo)
  }
  return { obtenerArbol, agregarNodo }
}

