import { Inject, Injectable,OnInit } from '@angular/core';
import { Config } from 'protractor';
import { CONFIG_SERVICE } from '../config-service';

@Injectable({
  providedIn: 'root'
})
export class FilmSubFnService implements OnInit{

  constructor (
    @Inject(CONFIG_SERVICE) private configService: Config
  ) { 
    
   }

   ngOnInit(){

   }


  makeTitleStrForActors(arr:Array<any>): string{
   var result: string = '';
 arr.forEach((item:any, index: number) => {
    item.title ? result+= item.title + ', ': result+= item.name + ', '
 })
  return result;
}

// Selection section
toSelectActor(item:any){
    return {
      "adult": item.adule,
      "also_known_as": [
          "Скарлетт Йоганссон",
          "Скарлетт Йоханссон",
          "Scarlett Ingrid Johansson",
          "스칼릿 조핸슨",
          "سكارليت جوهانسون",
          "史嘉蕾·喬韓森",
          "สการ์เลตต์ โจแฮนส์สัน",
          "スカーレット・ヨハンソン",
          "斯嘉丽·约翰逊",
          "스칼렛 요한슨",
          "Σκάρλετ Τζοχάνσον",
          "اسکارلت جوهانسون"
      ],
      "biography": item.biography,
      "birthday": item.birthday,
      "deathday": item.deathday,
      "gender": 1,
      "homepage": null,
      "id": item.id,
      "imdb_id": "nm0424060",
      "known_for_department": "Acting",
      "name": "Scarlett Johansson",
      "place_of_birth": "New York City, New York, USA",
      "popularity": 45.037,
      "profile_path": "/6NsMbJXRlDZuDzatN2akFdGuTvx.jpg"

    }
}
changValueOfPropety = (result: object) =>{
   this.changValueOfPropetySubFn(result, 'profile_path',`${this.configService.midImgPath}`)
   return result;
}

changValueOfPropetySubFn(obj:any,key:string, value:string){
  for(var item in obj){
    if(item = key) {
       obj[item] = `${value}${obj[item]}`;
       break;
    }
    ;
  }
}
addPropety(){
  
}
}
