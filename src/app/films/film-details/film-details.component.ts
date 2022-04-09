import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { FilmsService } from '../films.service';
import { Film, FilmDetails } from '../interface/film';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {
  film?: FilmDetails;

  constructor(
    private activatedRoute: ActivatedRoute,
    private filmsService: FilmsService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.filmsService.getFilmById(id) )
    )
    .subscribe( film => {
      this.film = film;
    });
  }

}
