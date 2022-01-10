import { Injectable, OnInit } from '@angular/core';
import { child_comp_bootst_conf } from './config-service';

@Injectable({
  providedIn: 'root'
})
export class ItPracticesService  implements OnInit{
   child_comp_bootst: object[] = [
    {comp: `<div>sds</div>`},
    {comp: `<app-layout-child1></app-layout-child1>`},
    {comp: `<app-layout-child1></app-layout-child1>`},
    {comp: `<app-layout-child1></app-layout-child1>`},
 
 ]
  constructor() { }
  ngOnInit(): void {

  }
  getComponent (){
    return this.child_comp_bootst
  }
}
