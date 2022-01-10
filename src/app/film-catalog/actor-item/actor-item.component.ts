import { Component, EventEmitter, Input, OnInit, Inject, Output, ElementRef, ViewChild, SimpleChanges, OnChanges } from '@angular/core';
import { Film } from '../../film';
import { Actor } from '../../actor';
import { CONFIG_SERVICE } from 'src/app/config-service';
import { Router } from '@angular/router';
import { Config } from 'src/app/config';
import { FilmService } from '../film.service';


@Component({
    selector: 'app-actor-item',
    templateUrl: './actor-item.component.html',
    styleUrls: ['./actor-item.component.css']
})
export class ActorItemComponent implements OnInit, OnChanges {
    @Input() actor: any;
    @Input() toggleClass: any;
    @Input() counter: number = 0;
    @Output('star') starEmitter = new EventEmitter<Actor>();
    makeToggleStyle: object = {};
  
   img_btn = document.getElementsByClassName('img-btn');
  // img_btn = document.querySelectorAll('.img-btn');
  constructor(@Inject(CONFIG_SERVICE) public configService: Config, public filmsService: FilmService,
  public router: Router) {
}
    ngOnChanges(changes: SimpleChanges): void {
        // throw new Error('Method not implemented.');
        if (!this.toggleClass){
            this.makeToggleStyleFn()
        }
    }
    ngOnInit() {
      // console.log(this.counter);
     }
    makeStarActor() {
        this.starEmitter.emit(this.actor);
    };
    oneActor(){
      const param = `${this.actor.id}-${this.actor.name.replace(' ', '-')}`
      console.log(param);
      this.router.navigate(['/person', param]);
    }
    makeToggleStyleFn(){
      this.makeToggleStyle = {
          'hide-text': !this.toggleClass
      }
    }

    makeOnMouseover(e: any){
      // console.log(  this.img_btn[this.counter].nextElementSibling);
      if(!this.toggleClass && e.currentTarget)  {
         // console.log(e.currentTarget);
        this.img_btn[this.counter].nextElementSibling?.setAttribute('class','show-text');
       //  console.log(  this.img_btn[this.counter].nextElementSibling);
      }
    }
    makeOnMouseout(e: any){
        // console.log(  this.img_btn[this.counter].nextElementSibling);
        if(!this.toggleClass && e.currentTarget)  {
           // console.log(e.currentTarget);
          this.img_btn[this.counter].nextElementSibling?.setAttribute('class', 'show-text-none');
          // console.log(  this.img_btn[this.counter].nextElementSibling);
        }
      }

}
