import { Film } from "./film";

export interface ApiResponse {
    page: number
    results: [Film]
    total_pages: number
    total_results: number
}
