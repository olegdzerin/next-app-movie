import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InjectionToken } from '@angular/core';1

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { FormsModule } from '@angular/forms';

 import { config } from 'rxjs';
import { configService, CONFIG_SERVICE } from './config-service';
import { Config, ConfigService } from './config';


import { RouterModule } from '@angular/router';
import { AliasConfigService } from './config-service-class';
import { MainComponent } from './main/main.component';
import { FilmDetailsModule } from './film-details/film-details.module';
//in this module info from movies, persons(actors)
import {FilmCatalogModule} from './film-catalog/film-catalog.module';

import { ItPracticesChildrensModule } from './it-practices/it-practices-childrens/it-practices-childrens.module';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    FilmCatalogModule,
    FilmDetailsModule,
    ItPracticesChildrensModule

  ],
  providers: [ConfigService,
     { provide: CONFIG_SERVICE, useValue: configService },
     { provide: AliasConfigService, useValue: configService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

