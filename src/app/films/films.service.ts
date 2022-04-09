import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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

  getTrendingFilms(): Observable<Film[]> {
    return this.httpClient.get<Film[]>(`${this.apiConfig.url}/3/trending/all/week?api_key=${this.apiConfig.token}`, {
      headers: {
        "Authorization": `Bearer ${this.apiConfig.token}`,
        "Content-Type": "application/json;charset=utf-8"
      }
    });
  }

}
