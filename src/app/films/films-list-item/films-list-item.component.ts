import { Component, Input, OnInit } from '@angular/core';
import { Film } from '../interface/film';

@Component({
  selector: 'app-films-list-item',
  templateUrl: './films-list-item.component.html',
  styleUrls: ['./films-list-item.component.css']
})
export class FilmsListItemComponent implements OnInit {
  @Input() film: Film | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
