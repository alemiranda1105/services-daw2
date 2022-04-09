import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../films.service';
import { Film } from '../interface/film';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {
  filmsList: Film[] = [];

  constructor(private filmsService: FilmsService) { }

  ngOnInit(): void {
    this.filmsService.getTrendingFilms().subscribe(res => {
      this.filmsList = res.results;
    });

    this.filmsService.getGenres().subscribe(res => {
      sessionStorage.setItem('genres', JSON.stringify(res.genres));
    });
  }

}
