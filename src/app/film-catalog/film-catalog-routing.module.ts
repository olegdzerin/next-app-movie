import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { MainComponent } from '../main/main.component';
import { FilmsListComponent } from './films-list/films-list.component';
import { MainFilmCatalogComponent } from './main-film-catalog/main-film-catalog.component';
import { ActorsListComponent } from './actors-list/actors-list.component';
//import { FilmItemComponent } from './film-item/film-item.component';
// import { FilmDetailsComponent } from '../film-details/film-details.component';

const routes: Routes = [
  {
    path: '', component: MainFilmCatalogComponent, children: [
      { path: 'movies', component: FilmsListComponent },
       { path: 'persons', component: ActorsListComponent }
      // {path: 'selectfilm', component: }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmCatalogRoutingModule { }
