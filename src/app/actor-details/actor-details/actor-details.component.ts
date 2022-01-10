
import { Component, EventEmitter, Inject, Input, OnInit, Output, ElementRef, ViewChild, SimpleChanges } from '@angular/core';
import { Film } from '../../film';
import { Actor } from '../../actor';
import { ActivatedRoute, Router } from '@angular/router';
import { CONFIG_SERVICE } from '../../config-service';
import { FilmService } from '../../film-catalog/film.service';
import { Config } from '../../config';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.css']
})
export class ActorDetailsComponent implements OnInit {
  subject: Subject<any> = new Subject()
  bool: any = true;
  filmCredits: any;
  urlBack(): any {
    // return 'url(https://image.tmdb.org/t/p/w1400_and_h450_face/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg)';
    return `url(https://image.tmdb.org/t/p/w1400_and_h450_face/${this.film.backdrop_path})`;
  }
  exp: any = "any"
  film: any = '';
  actor: any ;
  actorMovieCredits: any = 'any';
  filmCastActors: any = [];
  transformRuntime(): string {
    var obj = {
      h: () => Math.round(this.film.runtime/60),
      m: () => this.film.runtime - obj.h()
    }
    return `${obj.h()}h${obj.m()}m`
  }
    
  
 



  constructor(@Inject(CONFIG_SERVICE) public configService: Config, public filmsService: FilmService,
    public router: Router, public activateRouter: ActivatedRoute) {
  }
  background(): string {
    return 'background-image:url(https://image.tmdb.org/t/p/w300$/lz1iJlKRBMtE6uHauUneX7THa0c.jpg)';
  }

  // date:any = new Date(this.film.release_date
  //   .replace('-','/').replace('-','/')
  //   );
  date:any = ''



  ngOnInit() {
    this.activateRouter.params.subscribe((param) => {
       this.filmsService.oneActorId = Number(param.id_title.slice(0,param.id_title.indexOf('-')));
       console.log(this.filmsService.oneActorId);
      
      //  .subscribe((v) => {console.log(v)})
      
     
      this.filmsService.subjectOneActor$.subscribe({
        next:((v) => {
         this.actor = v
        })
      })
        this.filmsService.initActor()
        //init actorMovieCredits
        this.filmsService.initActorMovieCredits();
        this.filmsService.actorMovieCrediets$.subscribe({
          next: (v) => {this.actorMovieCredits = v
          //  console.log(this.actorMovieCredits)
        }
        })
        setTimeout(() => console.log(this.actorMovieCredits[0].original_language), 1000);
       
    });
  
    // this.filmsService.initOneFilm()
    // this.filmsService.subjectOneFilm
    // .subscribe({
    //   next: (v) => this.film = v
    // })
  //  this.subject.subscribe({
  //       next: (v) => {
         
  //         this.date = v.release_date.replace('-','/').replace('-','/')
  //       }
  //   })
    // this.filmsService.getOneFilm(this.filmsService.oneFilmId).subscribe((item) => {
    //   this.film = item;
    //   this.film.poster_path = `https://image.tmdb.org/t/p/w300${this.film.poster_path}`
    //  this.subject.next(this.film);
      this.bool = false;
    // console.log(this.film);
      // console.log(this.styleConfigDivFn());
  //  });
   
    // this.filmsService.getOneFilmCredits(this.filmsService.oneFilmId).subscribe((item) => {
    //   this.filmCredits = item;
    //   this.filmCastActors = this.filmCredits.filmCastActors;
    //   // console.log(item);
    //   console.log(this.filmCastActors);
    // });

  }
  show(){
    console.log(this.actorMovieCredits);
  }
  aboutFilm(){}
}
