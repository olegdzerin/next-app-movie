import { NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ActorDetailsComponent } from './actor-details/actor-details.component';
//import {FilmDetailsChildComponent} from './film-details-child/film-details-child.component'

import { DetailsMainComponent } from './details-main/details-main.component';
//import { ActorDetailsComponent } from '../actor-details/actor-details.component';

const routes: Routes = [
  { path: '', component: DetailsMainComponent,children:[
    // {path:'movie/:id-title', component: ActorDetailsComponent},
   {path:'person/:id_title', component: ActorDetailsComponent}
]
}]

@NgModule({
  imports: [RouterModule.forChild(routes),
    CommonModule],
  exports: [RouterModule]
})
export class ActorDetailsRoutingModule { }
