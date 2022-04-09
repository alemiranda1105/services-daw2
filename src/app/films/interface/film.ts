export interface Film {
    id: number
    poster_path: string | null
    adult: boolean
    overview: string
    release_date: string
    genre_ids: [number]
    title: string
    original_title: string
    popularity: number
    vote_average: number
}
