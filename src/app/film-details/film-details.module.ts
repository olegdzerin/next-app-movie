import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { FilmDetailsRoutingModule } from './film-details-routing.module';

 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { FormsModule } from '@angular/forms';
//import { FilmDetailsChildComponent } from './film-details-child/film-details-child.component';
import { FilmDetailsNavbarComponent } from './film-details-navbar/film-details-navbar.component';
//import { DetailsNavbarComponent } from './details-navbar/details-navbar.component';
import { DetailsMainComponent } from './details-main/details-main.component';
import { DetailChildActorsComponent } from './film-details-navbar/details-child/detail-child-actors/detail-child-actors.component';
import { DetailChildNetwoksComponent } from './film-details-navbar/details-child/detail-child-netwoks/detail-child-netwoks.component';
import { DetailChildMediaComponent } from './film-details-navbar/details-child/detail-child-media/detail-child-media.component';
import { DetailChildRecomendationComponent } from './film-details-navbar/details-child/detail-child-recomendation/detail-child-recomendation.component';
import { DetailChildSidebarComponent } from './film-details-navbar/details-child/detail-child-sidebar/detail-child-sidebar.component';
import { ActorDetailsComponent } from '../actor-details/actor-details/actor-details.component';
import { ActorDetailItemComponent} from '../actor-details/actor-detail-item/actor-detail-item.component'
import { ActorMovieCredItemComponent } from '../actor-details/actor-movie-cred-item/actor-movie-cred-item.component';

@NgModule({
  imports: [
    CommonModule,
    FilmDetailsRoutingModule,
    RouterModule,
    FormsModule,
     BrowserAnimationsModule
  ],
  declarations: [
    FilmDetailsComponent,
    ActorDetailsComponent,
     FilmDetailsNavbarComponent,
      DetailsMainComponent, 
      DetailChildActorsComponent,
       DetailChildNetwoksComponent,
        DetailChildMediaComponent,
        DetailChildRecomendationComponent,
         DetailChildSidebarComponent,
         ActorDetailItemComponent,
         ActorMovieCredItemComponent
        ]
})
export class FilmDetailsModule { }
