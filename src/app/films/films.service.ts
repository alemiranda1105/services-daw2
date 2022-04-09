import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from './interface/api-response';
import { Film } from './interface/film';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  films: Film[] = [];
  apiConfig = {
    url: "",
    token: ""
  };

  constructor(private httpClient: HttpClient) {
    this.apiConfig = {
      url: environment.apiUrl,
      token: environment.apiKey
    }
  }

  getTrendingFilms(): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(`${this.apiConfig.url}/3/trending/movie/week?api_key=${this.apiConfig.token}`, {
      headers: {
        "Authorization": `Bearer ${this.apiConfig.token}`,
        "Content-Type": "application/json;charset=utf-8"
      }
    });
  }

}
