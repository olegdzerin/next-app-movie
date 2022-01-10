import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BootstrapComponent } from './bootstrap/bootstrap/bootstrap.component';
import { LayoutComponent } from './bootstrap/bootstrap/layout/layout/layout.component';
import { CssHttpComponent } from './css-http/css-http.component';


const routes: Routes = [
  {
    path: '', component: BootstrapComponent , children: [
      { path: 'layout', component: LayoutComponent },
      // { path: 'layout', component: LayoutComponent },
    ],
  },
  {path: 'csshtml', component: CssHttpComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItPracticesChildrensRoutingModule { }