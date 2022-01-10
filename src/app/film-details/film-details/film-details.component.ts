
import { Component, EventEmitter, Inject, Input, OnInit, Output, ElementRef, ViewChild, SimpleChanges } from '@angular/core';
import { Film } from '../../film';
import { Actor } from '../../actor';
import {FilmCredits} from '../../model/film-credits'
import { Router } from '@angular/router';
import { CONFIG_SERVICE } from '../../config-service';
import { FilmService } from '../../film-catalog/film.service';
import { Config } from '../../config';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { url } from 'inspector';


@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {
  film1:any = "anyany"
  subject: Subject<any> = new Subject()
  bool: any = true;
  filmCredits: FilmCredits | undefined;
  urlBack(): any {
     //return `url(https://image.tmdb.org/t/p/w1400_and_h450_face/${this.film.backdrop_path})`;
     return `url(https://image.tmdb.org/t/p/w1280/${this.film.backdrop_path})`;
  //  return `url(${this.configService.bigBackPath}/${this.film.backdrop_path})`
  }
 
  film: any = '';
  filmCastActors: any = [];
  transformRuntime(): string {
    var obj = {
      h: () => Math.round(this.film.runtime/60),
      m: () => this.film.runtime - obj.h()
    }
    return `${obj.h()}h${obj.m()}m`
  }
    
 
 
  styleConfigDiv(): any {
    return {
      'background-image': this.bool ? 'url(https://image.tmdb.org/t/p/w1400_and_h650_face/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg)' : this.urlBack(),
      'color': 'white',
      'opacity': 0.5
    };
  }
  constructor(@Inject(CONFIG_SERVICE) public configService: Config, public filmsService: FilmService,
    public router: Router) {
  }
  background(): any {
    return {'background-image':'url(https://image.tmdb.org/t/p/w300$/lz1iJlKRBMtE6uHauUneX7THa0c.jpg)'};
  }

  // date:any = new Date(this.film.release_date
  //   .replace('-','/').replace('-','/')
  //   );
  date:any ;



  ngOnInit() {
     this.subject.subscribe({
        next: (v) => {
         
          this.date = v.release_date.replace('-','/').replace('-','/')
        }
    })
    this.filmsService.initOneFilm()
    this.filmsService.subjectOneFilm
    .subscribe({
      next: (v) => {
        this.film = v;
          this.subject.next(this.film);
       }
    });
    this.filmsService.initFilmCredits(this.filmsService.oneFilmId)
    this.filmsService.subjectFilmCredits
    .subscribe({
      next: (v: FilmCredits) => {
    //    console.log(v);
        this.filmCredits = v;
       }
    })
     this.bool = false;
  }
  aboutFilm(){}
  crewMemberJobSelect(item: any){
    if(item.job === 'Director'|| item.job === 'Screenplay'||
    item.job === 'Characters'|| item.job === 'Writer') return true;
    return false
  }
}
