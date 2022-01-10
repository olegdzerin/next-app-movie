import { Component, OnInit, ViewEncapsulation, ViewChild, Inject, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { InjectionToken } from '@angular/core';
import { CONFIG_SERVICE } from '../../config-service';
import { FilmService } from '../film.service';
import { Film } from '../../film';
import { SortOption } from '../../sort-option';
import { FilmItemComponent } from '../film-item/film-item.component';

import { SearchComponent } from '../search/search.component';
import { Router } from '@angular/router';
import { Actor } from '../../actor';
import { Config } from '../../config';

@Component({
    selector: '.actor',
    templateUrl: './actors-list.component.html',
    styleUrls: ['./actors-list.component.css']
})
export class ActorsListComponent implements OnInit {
    title: string ='Популярние люди'
    filmsData: Film[] = [];
    actorsData: Actor[] =[];
    sortOption: any;
    counter: number = 0;
    toggleClass: boolean = true;

    variantDisplay: boolean = true;
    pageActors: number = 1;
    // @ViewChild(SearchComponent) search: SearchComponent;
    // makeSearchActors(actorsDataSearch?: Actor[]) {
    //     this.variantDisplay = false;
    //     if ((this.router.url === '/main/actor') || (this.router.url === '/actor')) {
    //         this.actorsData = this.filmsService.getActors();
    //         console.log(this.actorsData);
    //     }
    // }
    ngOnInit() {
        this.filmsService.actors = [];
        this.pageActors = 1
        this.filmsService.pageActors = this.pageActors;
        this.filmsService.initPopularActors();
        this.filmsService.subjectActors.subscribe({
            next: (v: any) => {
              this.actorsData.push(v);
            }
          });      
    };
    setPagingActors() {
        this.pageActors++;
        this.filmsService.pageActors = this.pageActors;
        this.filmsService.initPopularActors();
    }
    // setPagingSearchActors() {
    //     this.search.searchActors();

    // }
    constructor(@Inject(CONFIG_SERVICE) public configService: Config, public filmsService: FilmService,
        public router: Router) {
    }
    makeStarActor(arg:any) {
        console.log(arg);
    }
    setPagingFilms(){};
    setPagingSearchFilms(){};

    finerView(){
       this.toggleClass = !this.toggleClass;
    }
}
