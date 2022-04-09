import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsListComponent } from './films-list/films-list.component';
import { FilmsPageComponent } from './films-page/films-page.component';
import { FilmsRoutingModule } from './films-routing.module';



@NgModule({
  declarations: [
    FilmsListComponent,
    FilmsPageComponent
  ],
  imports: [
    CommonModule,
    FilmsRoutingModule
  ]
})
export class FilmsModule { }
