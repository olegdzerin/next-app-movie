import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsListComponent } from './films-list/films-list.component';
import { ActorsListComponent } from './actors-list/actors-list.component';
// import { SearchRouterComponent } from './search-router/search-router.component';
import { FormsModule } from '@angular/forms';
 import { FilmItemComponent } from './film-item/film-item.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmCatalogRoutingModule } from './film-catalog-routing.module';
import { RouterModule } from '@angular/router';
import { MainFilmCatalogComponent } from './main-film-catalog/main-film-catalog.component';
import { SortingComponent } from './sorting/sorting.component';
//import { FiltrComponent } from './filtr/filtr.component';
import { WhereWatchComponent } from './where-watch/where-watch.component';
import { FilterComponent } from './filter/filter.component';
import { ActorItemComponent } from './actor-item/actor-item.component';
//import { ActorMovieCredItemComponent } from '../actor-details/actor-movie-cred-item/actor-movie-cred-item.component';
// import { FilmDetailsComponent } from '../film-details/film-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    FilmCatalogRoutingModule,
    RouterModule
  ],
  declarations: [   
    FilmsListComponent,
    MainFilmCatalogComponent,
    ActorsListComponent,
    FilmItemComponent,
  SortingComponent,
  WhereWatchComponent,
  FilterComponent,
  //  SearchComponent,
    ActorItemComponent,
   // ActorMovieCredItemComponent
  ],
  providers: []
})
export class FilmCatalogModule {
}
