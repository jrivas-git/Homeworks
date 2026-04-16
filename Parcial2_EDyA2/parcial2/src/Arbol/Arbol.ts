export interface NodoArbol {
  id?: string
  nombre: string
  tipo: "Carpeta" | "Archivo"
  padreId?: string | null
  usuario: string
}

