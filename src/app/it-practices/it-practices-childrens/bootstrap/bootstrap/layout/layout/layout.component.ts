import { Component, OnInit } from '@angular/core';
import { ItPracticesService } from 'src/app/it-practices/it-practices.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  component!: any;
  constructor(private itPracticesService: ItPracticesService) { }

  ngOnInit(): void {
   this.component = this.itPracticesService.getComponent();
   console.log(this.component);
  }

}
