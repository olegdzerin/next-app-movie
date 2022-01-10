import { Component, OnInit, ViewEncapsulation, ViewChild, Inject, ElementRef, ViewChildren, QueryList, SimpleChanges } from '@angular/core';
// import { InjectionToken } from '@angular/core';
import { Subject } from 'rxjs';
import { CONFIG_SERVICE } from '../../config-service';
import { Config } from '../../config';
import { Router } from '@angular/router';
import { FilmService } from '../film.service';
import { Film } from '../../film';
import { SortOption } from '../../sort-option';
//import { FilmItemComponent } from '../film-item/film-item.component';

//import { SearchComponent } from '../search/search.component';

import { Actor } from '../../actor';

import { HttpClient } from '@angular/common/http';
import { SortingService } from '../sorting.service';
import { ConfigSortBy } from '../../config-sortBy'


@Component({
  selector: 'app-films',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {
  title: string = 'Популярные фильмы';
  //Масив фильмов , что используеться для представлении
  filmsData: Film[] = [];
  filmsDataOnePage: Film[] = [];
  actorsData: Actor[] = [];
  counter: number = 0;
  variantDisplay: boolean = true;
  //main property for films
  pageFilms: number = 1;
  modeShowFilms: any = { sortBy: 'popular', increaseDecrease: 'decrease' };

  links: any = [
    {
      title: 'Сортировать',
      id: 'dropdownMenuSorting'
    },
    {
      title: 'Фильтры',
      id: 'dropdownMenuFilter'
    },
    {
      title: 'Где посмотретьe',
      id: 'dropdownMenuWatch'
    }
  ];
  //Subject
  subjectForTransportDate: Subject<Film[]> = new Subject<Film[]>();
  

  // @ViewChild(SearchComponent) search: SearchComponent;
  constructor(@Inject(CONFIG_SERVICE) public configService: Config, public filmsService: FilmService,
    public router: Router, public sortingService: SortingService) {
  }

  ngOnInit() {
    this.filmsService.films = [];
    this.pageFilms = 1;
    this.filmsService.pageFilms = this.pageFilms;
    this.filmsService.modeShowFilms = { sortBy: 'popular', increaseDecrease: 'decrease' };
    this.filmsService.initFilms();
    this.filmsService.subject.subscribe({
      next: (v: any) => {
        this.filmsData = this.filmsData.concat(v);
      }
    });
  
  }
  makeShowFilmsFirst(sortMode: any) {
    this.modeShowFilms = sortMode
    this.filmsService.modeShowFilms = this.modeShowFilms;
    this.pageFilms = 1;
    this.filmsService.pageFilms
    this.filmsService.films = [];
    this.filmsService.pageFilms = this.pageFilms;
    this.filmsData = [];
    this.filmsService.initFilms();
  }
  setPagingFilms() {
    this.pageFilms++;
    this.filmsService.pageFilms = this.pageFilms;
   this.filmsService.modeShowFilms = this.modeShowFilms;
    this.filmsService.initFilms()
  }



  setPagingSearchFilms() {
    //  this.search.searchFilms();
  };
  makeStarFilms(arg: any) {
    console.log(arg);
  };
  makeSearchFilms(filmsDataSearch?: Film[]) {
    this.variantDisplay = false;
  }
}