import { Component, EventEmitter, Inject, Input, OnInit, Output, ElementRef, ViewChild, SimpleChanges } from '@angular/core';
import { Film, exampleFilm } from '../../film';
import { Actor } from '../../actor';
import { Router } from '@angular/router';
import { CONFIG_SERVICE } from '../../config-service';
import { FilmService } from '../film.service';
import { Config } from '../../config';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {
  @Input() film: Film = exampleFilm;

  @Input() counter: number = 1;
  @Output() star: EventEmitter<string> = new EventEmitter();


  constructor(@Inject(CONFIG_SERVICE) public configService: Config, public filmsService: FilmService,
    public router: Router) {
  }
  ngOnInit() { }

 

  //Поки не працює
  makeStarFilms() {
    this.star.emit(this.film.title);
  }

  oneFilm() {
    const transformtitle =  () => {
     
      const title = `${this.film.title.replace(' ', '-').replace(' ', '-')}`
      return title;
    }
     const param = `${this.film.id}-${transformtitle()}`
  
    this.filmsService.oneFilmId = this.film.id;
    this.filmsService.selectFilm = this.film;
    //  this.filmsService.getOneFilm(this.filmsService.oneFilmId);
    // this.filmsService.getOneFilmCredits();
    //  console.log(this.film.id, this.film);
    // this.filmsService.getOneFilm(this.film.id)
    //   .subscribe(res => console.log(res))
    // setTimeout(() => {
    //   this.router.navigate(['/movie', param]);
    // }, 20);
    this.router.navigate([`/movie`, param]);
  };
  startFilm(arg: any) { }

}
