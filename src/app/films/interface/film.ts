export interface Film {
    poster_path: string | null
    adult: boolean
    overview: string
    release_date: string
    genre_ids: [number]
    title: string
    popularity: number
}
