import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { FilmsListComponent } from './films-list/films-list.component';
import { FilmsPageComponent } from './films-page/films-page.component';

const routes: Routes = [
    {
        path: '',
        component: FilmsPageComponent,
        children: [
            {
                path: 'list',
                component: FilmsListComponent
            },
            {
                path: 'details/:id',
                component: FilmDetailsComponent
            },
            {
                path: '**',
                redirectTo: 'list'
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule { }