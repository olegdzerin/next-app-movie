import { Component, Inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CONFIG_SERVICE } from '../../config-service';
import { FilmService } from '../../film-catalog/film.service';
import { Config } from '../../config';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-actor-detail-item',
  templateUrl: './actor-detail-item.component.html',
  styleUrls: ['./actor-detail-item.component.css']
})
export class ActorDetailItemComponent implements OnInit {
   @Input() actorCard: any
   constructor(@Inject(CONFIG_SERVICE) public configService: Config, public filmsService: FilmService,
   public router: Router, public activateRouter: ActivatedRoute) {
 }

  ngOnInit(): void {

  }
remakeImg(){
 return this.configService.smallImgPath + this.actorCard.poster_path;
}
}
