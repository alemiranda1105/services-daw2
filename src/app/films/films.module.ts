import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsListComponent } from './films-list/films-list.component';
import { FilmsPageComponent } from './films-page/films-page.component';
import { FilmsRoutingModule } from './films-routing.module';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import { FilmsListItemComponent } from './films-list-item/films-list-item.component';



@NgModule({
  declarations: [
    FilmsListComponent,
    FilmsPageComponent,
    FilmsListItemComponent
  ],
  imports: [
    CommonModule,
    FilmsRoutingModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class FilmsModule { }
