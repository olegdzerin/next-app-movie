import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  links: any = 
    [
      
      // { path: '/main', label: 'Главная', active: 'button-active', icon: 'home' },
      { path_1: '/movies', label: 'Фильмы',labelItem1: 'Популярные фильмы',labelItem2:'Ожидаемые', labelItem3: 'Лучшие',
      id: 'navbarDropdownMovies' , active: 'button-active', icon: 'list_alt' },
      { path_1: '/serials', label: 'Сериалы', labelItem: 'Популярные актеры',
       id: 'navbarDropdownSerials', active: 'button-active', icon: 'home' },
      { path_1: '/persons', label: 'Люди', labelItem1: 'Популярные Люди',
      id: 'navbarDropdownActors', active: 'button-active', icon: 'list_alt' },
      { path_1: '/persons', label: 'Ещё',
      id: 'navbarDropdownMore', active: 'button-active', icon: 'list_alt' },
      { path_1: '/IT', path_2: '/layout',path_3:'/csshtml', label: 'it-practices',
      id: 'navbarDropdownIt', active: 'button-active', icon: 'list_alt', labelItem1: "111",
      labelItem2: "layout", labelItem3: "csshtml" },
  
      // { path: '/search-router', label: 'Поиск фильмов', active: 'button-active', icon: 'list_alt' }
    ]
  ;

}
