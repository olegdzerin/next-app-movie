import { Component, OnInit } from '@angular/core';
import bsCustomFileInput from 'bs-custom-file-input'

@Component({
  selector: 'app-layout-child2',
  templateUrl: './layout-child2.component.html',
  styleUrls: ['./layout-child2.component.css']
})
export class LayoutChild2Component implements OnInit {
  //bsCustomFileInput: any = bsCustomFileInput
  constructor() { }

  ngOnInit(): void {
  // bsCustomFileInput.init()
  }

}
