import { Component, Input, OnInit } from '@angular/core';
import { Film } from '../interface/film';

@Component({
  selector: 'app-films-list-item',
  templateUrl: './films-list-item.component.html',
  styleUrls: ['./films-list-item.component.css']
})
export class FilmsListItemComponent implements OnInit {
  @Input() film: Film | undefined;

  genres: string[] = [];

  constructor() { }

  ngOnInit(): void {
    if(this.film) {
      let genresJson = sessionStorage.getItem('genres');
      if(genresJson) {
        var genresList = JSON.parse(genresJson);
        genresList.forEach(({id, name}: {id:number, name: string}) => {
          if(this.film?.genre_ids.includes(id)) {
            this.genres.push(name);
          }
        });
      }
    }
    
  }

}
