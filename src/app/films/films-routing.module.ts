import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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