import { Injectable, Inject } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { Film, FilmDetails } from '../film';
import { Actor } from '../actor';
import {FilmCast, FilmCredits} from '../model/film-credits'
import { Config } from '../config';
import { SortOption } from '../sort-option';
import { HttpClient } from '@angular/common/http';
import { CONFIG_SERVICE } from '../config-service';
import { catchError, map, mergeAll, pluck, retry, take, tap } from 'rxjs/operators';
import { SortingService } from './sorting.service';
import { ConfigSortBy } from '../config-sortBy'
import { FilmSubFnService } from './film-sub-fn.service';
import { FilmDetailsComponent } from '../film-details/film-details/film-details.component';


@Injectable({
  providedIn: 'root'
})
export class FilmService {

  //property for movea section
  films: Film[] = [];
  film: any = [];
  filmCredits: any;
  pageFilms: number = 0;
  count: number = 0;
  modeShowFilms: ConfigSortBy = { sortBy: 'popular', increaseDecrease: 'decrease' };
  subject = new Subject<any>();
  subjectActors = new Subject<any>();
  subjectForFilmsData = new Subject<any>();


  actor: any = [];
  actors: Actor[] = [];
  actorMovieCredids: any

  maxPageFilms: number = 500;

  // pageFilms = 1;
  pageActors: number = 1;

  pageSearchFilms: number = 1;
  searchedFilms: string = '';
  pageSearchActors: number = 1;
  searchedActors: string = '';
  searchedActorWord: string = '';
  searchedFilmsWord: string = '';
  oneFilmId: any;
  oneActorId: number = 0;
  selectFilm: any = '';


  
  subjectOneFilm = new Subject<any>();
  subjectFilmCredits = new Subject<any>();
  subjectOneActor$ = new Subject<any>();
  // actorMovieCrediets$:  Observable<any> = of();
  actorMovieCrediets$ = new Subject<any>();

  constructor(private http: HttpClient,
    @Inject(CONFIG_SERVICE) public configService: Config,
    private sortingService: SortingService,
    private filmSubFnService: FilmSubFnService) {
    // console.log(this.films);
  }

  // initPopularFilms(pageFilms?: number, revers?: boolean, sorting?: string, sortByDate?: any, sortByTitle?: string ) {

  //     this.popularFilms(this.getPopularFilms(pageFilms, sorting), undefined,undefined,revers, sortByDate, sortByTitle);


  // }
  // initPopularFilms(pageFilms: number, sorting: ConfigSortBy) {

  // this.popularFilms(this.getPopularFilms(pageFilms, sorting.sortBy),sorting);


  // }


  //actors section
  initPopularActors() {
    if (this.pageActors === 1) {
      this.actors = [];
    }
    this.popularActors(this.getPopularActorsOnePage());
  };
  popularActors(item: any, searchedFilms?: string, pageSearchFilms?: number) {
    item.subscribe((actorList: any) => {
      actorList.results.forEach((result: any) => {
        // const actor = {
        //   id: result.id,
        //   isFavorite: false,
        //   adult: false,
        //   name: result.name,
        //   popularity: result.popularity,
        //   profile_path: `${this.configService.midImgPath}${result.profile_path}`,
        //   known_for_short: this.filmSubFnService.makeTitleStrForActors(result.known_for),
        //   known_for: result.known_for
        // };
        // const actor = Object.assign(result)
        result.profile_path = `${this.configService.midImgPath}${result.profile_path}`;
        result. known_for_short = this.filmSubFnService.makeTitleStrForActors(result.known_for);
        this.subjectActors.next(result);
       // this.actors.push(result);
      });
      //  console.log(this.actors);
    });
  }
  getPopularActorsOnePage() {
    return this.http.get(`${this.configService.personUrl}/popular?${this.configService.params}&page=${this.pageActors}`);
  };
  getActors() {
    // console.log(this.actors);
    return this.actors;
  }

  //One actor section
  initActor() {
    this.getActorSubscribe(this.getActorObservable())

  }
  getActorSubscribe(item: any) {
    item.subscribe((actor: any) => {
      this.actor = actor;
      this.subjectOneActor$.next(this.actor);
      //console.log(actor);
    })
  };
  getActorObservable() {
    var filteredActors$: Observable<any>
    return this.http.get(`${this.configService.personUrl}/${this.oneActorId}?${this.configService.params}`)

      .pipe(
        retry(2),
        map(this.filmSubFnService.changValueOfPropety),
        tap((actor) => {
          //       console.log(this.actors);
          filteredActors$ = of(this.actors.filter(item => item.id === this.oneActorId));
          // console.log(this.actors.filter(item => item.id === this.oneActorId)); 
        }),


        map((actor) => {
          let known_for: any;
          filteredActors$.subscribe((v) => {
            //  console.log(v);
            known_for = v[0].known_for;
            Object.assign(actor, { known_for: known_for });

          })

          return actor;
        }
        )

      );
  }
  getActor(arr: any) {
    this.subjectOneActor$.subscribe({
      next: ((v) => {
        arr = v;
        console.log(arr);
      })
    })
  }
  //get actorMovieCredits
  initActorMovieCredits() {
    this.actorMovieCreditsFn(this.getObsActorMovieCredits())

  }
  actorMovieCreditsFn(item: Observable<any>) {
    item.subscribe((result) => {
      console.log(result);
      this.actorMovieCrediets$.next(result);
    })

  }
  getObsActorMovieCredits() {
    return this.http.get(`${this.configService.personUrl}/${this.oneActorId}/movie_credits?${this.configService.params}`)
      .pipe(
        map((res: any) => {
          this.sortingService.sortingByDateFn('decrease', res.cast);
          this.actorMovieCredids = res.cast;
          return res.cast
        }),
      );
  };
// get movies
  initFilms() {
    if (this.pageFilms === 0) {
      this.films = [];
    }

    this.popularFilms(this.getPopularFilmsOnePage());
  };
  popularFilms(item: any) {
    item.subscribe(
      (filmList: any) => {
        // if ((this.modeShowFilms.increaseDecrease === 'increase'
        //   && this.modeShowFilms.sortBy === 'popular') ||
        //   (this.modeShowFilms.increaseDecrease === 'increase'
        //     && this.modeShowFilms.sortBy === 'popular')) { filmList.results.reverse() };
          const films = [...filmList.results];
      //     this.films.push({
      //       id: result.id,
      //       isFavorite: false,
      //       title: result.title,
      //       popularity: result.popularity,
      //       release_date: result.release_date,
      //       overview: result.overview.slice(0, 130),
      //       poster_path: `${this.configService.midImgPath}${result.poster_path}`,
      //       backdrop_path: `${this.configService.midImgPath}${result.backdrop_path}`
      //     });
      //  });
           films.forEach((film) => {
             this.trasformFilmData(film);
           })
        // if (this.modeShowFilms.sortBy === 'release_date') {
        //   this.sortingService.sortingByDateFn(this.modeShowFilms.increaseDecrease, this.films)
        // }
        // if (this.modeShowFilms.sortBy === 'title') {
        //   this.sortingService.sortingByTitleFn(this.modeShowFilms.increaseDecrease, this.films)
        // }
        this.subject.next(films);
      });

  };
  trasformFilmData (film: Film | FilmDetails){
  //  film.isFavorite = false;
    film.overview.slice(0, 130);
    film.poster_path = `${this.configService.midImgPath}${film.poster_path}`;
    film.backdrop_path =`${this.configService.midImgPath}${film.backdrop_path}`
  }
  transformFilmCredits (filmCredits: FilmCredits) {
    filmCredits.cast.forEach((person: FilmCast) => {
      person.profile_path = `${this.configService.midBackPath}/${person.profile_path}`
    });
    return filmCredits;
  }
  getPopularFilmsOnePage = () => {
    let sortBy = ''
    if (this.modeShowFilms.sortBy === 'popular') {
        var pageFilms;
      this.modeShowFilms.increaseDecrease === 'increase' ?
        pageFilms = 501 - this.pageFilms : pageFilms = this.pageFilms;
      sortBy = this.modeShowFilms.sortBy
    }
    if (this.modeShowFilms.sortBy === 'top_rated') {
      this.modeShowFilms.increaseDecrease === 'increase' ? pageFilms = 438 - this.pageFilms : pageFilms = this.pageFilms++;
      sortBy = this.modeShowFilms.sortBy
    }
    if ((this.modeShowFilms.sortBy === 'release_date') || (this.modeShowFilms.sortBy === 'title')) {
      this.pageFilms++;
      sortBy = 'popular'
    };
    return this.http.get(`${this.configService.movieUrl}/${this.modeShowFilms.sortBy}?page=${pageFilms}&${this.configService.params}`);
  };


  //get movie 
  initOneFilm():void {
    this.oneFilmSubscribe(this.getOneFilmObservable);
  };
  oneFilmSubscribe(item: any) {
    item().subscribe((film: FilmDetails) => {
      this.trasformFilmData(film);
      this.film = film;
      this.subjectOneFilm.next(this.film);
    });
  }
  getOneFilmObservable = (): Observable<any> => {
    return this.http.get(`${this.configService.movieUrl}/${this.oneFilmId}?${this.configService.params}`)
      .pipe(
        retry(2)
       // map(this.transformFilmCreditsData)
      );
  };
  //get movie credits
  initFilmCredits(id: any){
    this.filmCreditsSubscribe(this.filmCreditsInitObservable, id)
  }
  filmCreditsInitObservable = (id:any): Observable<any> => {
   return this.http.get(`${this.configService.movieUrl}/${id}/credits?${this.configService.params}`) 
   .pipe(
        retry(2),
        map((data: any) => {
             this.transformFilmCredits(data)
              return data
        })
        )
    
  };
  filmCreditsSubscribe(filmCreditsInitObservable: Function, oneFilmId?: number) {
    filmCreditsInitObservable(oneFilmId).subscribe((filmCredits: any) => {
       this.subjectFilmCredits.next(filmCredits);
    });
  }

  popularFilmsSearch(item: any, searchedFilms?: string, pageSearchFilms?: number,) {
    item(searchedFilms, pageSearchFilms).subscribe((filmList: any) => {
      filmList.results.map((result: any) => {
        this.films = [...result]
        // this.films.push({
        //   id: result.id,
        //   isFavorite: false,
        //   title: result.title,
        //   popularity: result.popularity,
        //   release_date: result.release_date,
        //   overview: result.overview.slice(0, 130),
        //   poster_path: `${this.configService.midImgPath}${result.poster_path}`,
        //   backdrop_path: `${this.configService.midImgPath}${result.backdrop_path}`

        // });
      });
    });
  }

  popularActorsSearch(item: any, searchedActors?: string, pageSearchActors?: number) {
    item(searchedActors, pageSearchActors).subscribe((actorList: any) => {
      actorList.results.map((result: any) => {
        result.profile_path = `${this.configService.midImgPath}${result.profile_path}`
        this.actors.push( 
          result
        //   {
        //   id: result.id,
        //   isFavorite: false,
        //   adult: false,
        //   name: result.name,
        //   popularity: result.popularity,
        //   profile_path: `${this.configService.midImgPath}${result.profile_path}`
        // }
        );
      });
    });
  }

  getSearchFilms = (searchedFilms?: string, page?: number) => {
    return this.http.get(`${this.configService.searchUrl}/movie?&query=${searchedFilms}&${this.configService.params}&page=${page}&include_adult=false`)
  }
  getSearchActors = (searchedActors: string, page?: number) => {
    return this.http.get(`${this.configService.searchUrl}/person?&query=${searchedActors}&${this.configService.params}&page=${page}&include_adult=false`)
  }

  // Частина коду повязана з search.component
  searchFilms() {
    if ((this.searchedFilms.length >= 3) && !(this.searchedFilms === this.searchedFilmsWord)) {
      this.films = [];
      this.popularFilmsSearch(this.getSearchFilms, this.searchedFilms, this.pageSearchFilms);

      this.searchedFilmsWord = this.searchedFilms;
    } else {
      if (this.searchedFilms.length >= 3) {
        this.popularFilmsSearch(this.getSearchFilms, this.searchedFilms, this.pageSearchFilms);
      } else {
        if (this.searchedFilms.length === 0) {
        }
      }
    }
  }
  searchActors() {
    if ((this.searchedActors.length >= 3) && !(this.searchedActors === this.searchedActorWord)) {
      this.actors = [];
      this.popularActorsSearch(this.getSearchActors, this.searchedActors, this.pageSearchActors);

      this.searchedActorWord = this.searchedActors;
    } else {
      if (this.searchedActors.length >= 3) {
        this.popularActorsSearch(this.getSearchActors, this.searchedActors, this.pageSearchActors);
      } else {
        if (this.searchedActors.length === 0) {
        }
      }
    }
    console.log(this.actors);
  }

  getOneFilmCredits = (oneFilmId: number) => {
    return this.http.get(`${this.configService.movieUrl}/${oneFilmId}/credits?api_key=${this.configService.apiKey}`).
      pipe(
        retry(2),
        map(this.toSelectFilmCredits)
      );
    // https://api.themoviedb.org/3/movie/498580/credits?api_key=0994e7679a856150aadcecf7de489bce
  }

  private toSelectFilmCredits(film: any): any {
    return {

      // poster_path: `${this.configService.midImgPath}${film.poster_path}`,
      poster_path: `https://image.tmdb.org/t/p/w300${film.poster_path}`,
      director: film.crew[3].name,
      screenplay: film.crew[4].name,
      photograph: film.crew[11].name,
      // actor_name_1: film.cast[0].name,
      // actor_character_1: film.cast[0].character,
      // actor_profile_path_1: `https://image.tmdb.org/t/p/w300${film.cast[1].profile_path}`,
      // actor_name_2: film.cast[1].name,
      // actor_character_2: film.cast[1].character,
      // actor_profile_path_2: `https://image.tmdb.org/t/p/w300${film.cast[1].profile_path}`,
      // actor_name_3: film.cast[2].name,
      // actor_character_3: film.cast[2].character,
      // actor_profile_path_3: `https://image.tmdb.org/t/p/w300${film.cast[2].profile_path}`,
      // actor_name_4: film.cast[3].name,
      // actor_character_4: film.cast[3].character,
      // actor_profile_path_4: `https://image.tmdb.org/t/p/w300${film.cast[3].profile_path}`,
      filmCastActors: [
        {
          actor_name: film.cast[0].name,
          actor_character: film.cast[0].character,
          actor_profile_path: `https://image.tmdb.org/t/p/w300${film.cast[0].profile_path}`
        },
        {
          actor_name: film.cast[1].name,
          actor_character: film.cast[1].character,
          actor_profile_path: `https://image.tmdb.org/t/p/w300${film.cast[1].profile_path}`
        },
        {
          actor_name: film.cast[2].name,
          actor_character: film.cast[2].character,
          actor_profile_path: `https://image.tmdb.org/t/p/w300${film.cast[2].profile_path}`
        },
        {
          actor_name: film.cast[3].name,
          actor_character: film.cast[3].character,
          actor_profile_path: `https://image.tmdb.org/t/p/w300${film.cast[3].profile_path}`
        },
        {
          actor_name: film.cast[4].name,
          actor_character: film.cast[4].character,
          actor_profile_path: `https://image.tmdb.org/t/p/w300${film.cast[4].profile_path}`
        }
      ]
    };
  }
}
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
// params: `&api_key=0994e7679a856150aadcecf7de489bce&language=ru-RU`,
