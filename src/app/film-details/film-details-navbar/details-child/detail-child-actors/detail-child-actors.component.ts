import { Component, Input, OnInit, Output } from '@angular/core';
import { FilmDetails } from 'src/app/film';
import { FilmService } from 'src/app/film-catalog/film.service';
import { FilmCredits } from 'src/app/model/film-credits';

@Component({
  selector: 'app-detail-child-actors',
  templateUrl: './detail-child-actors.component.html',
  styleUrls: ['./detail-child-actors.component.css']
})


export class DetailChildActorsComponent implements OnInit {
  @Input() film! :FilmDetails;
  filmCredits!: FilmCredits;
  
  //@Output()
  constructor(private filmsService: FilmService ) { }
  film1: any = ''
  ngOnInit(): void {
    // this.filmService.initPopularActors() 
    this.filmsService.subjectOneFilm
    .subscribe({
      next: (v: any) => {
        this.film1 = v;
        //  this.subject.next(this.film);
     //   console.log(this.film1);
       }
    });
    this.filmsService.subjectFilmCredits
    .subscribe({
      next: (v: FilmCredits) => {
     //   console.log(v);
        
        this.filmCredits = v;
        console.log(this.filmCredits);
       }
    })
  }

}


 