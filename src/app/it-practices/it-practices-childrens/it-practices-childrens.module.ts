import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapComponent } from './bootstrap/bootstrap/bootstrap.component';
import { LayoutComponent } from './bootstrap/bootstrap/layout/layout/layout.component';
import { RouterModule } from '@angular/router';
import { ItPracticesChildrensRoutingModule } from './it-practices-childrens-routing.module';
import { CssHttpComponent } from './css-http/css-http.component';
import { LayoutChild1Component } from './bootstrap/bootstrap/layout/layout/layout-childs/layout-child1/layout-child1.component';
import { LayoutChild2Component } from './bootstrap/bootstrap/layout/layout/layout-childs/layout-child2/layout-child2.component';
import { LayoutChild3Component } from './bootstrap/bootstrap/layout/layout/layout-childs/layout-child3/layout-child3.component';
import { LayoutChild4Component } from './bootstrap/bootstrap/layout/layout/layout-childs/layout-child4/layout-child4.component';



@NgModule({
  declarations: [
    BootstrapComponent,
    LayoutComponent,
    CssHttpComponent,
    LayoutChild1Component,
    LayoutChild2Component,
    LayoutChild3Component,
    LayoutChild4Component
  ],
  imports: [
    ItPracticesChildrensRoutingModule,
    CommonModule,
    RouterModule
  ]
})
export class ItPracticesChildrensModule { }
