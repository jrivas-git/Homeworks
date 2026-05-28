export interface Cancion {
    id: string
    titulo: string
    artista: string
    genero: string
    popularidad: number
    relacionadas: string[]
}


export type EntradaCancion = Omit<Cancion, "id">
