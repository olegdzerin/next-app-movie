export interface Film1 {
  id: number;
  isFavorite: boolean;
  // vote_overage: string;
  title: string;
  popularity: string;
  release_date: string;
  poster_path: string;
  overview: string;
  backdrop_path: string;

}

export interface FilmDetails {
  "adult": boolean,
  "belongs_to_collection": any,
  "budget": number,
  "genres": object[],
   
  "homepage": string,
  id: number;
  "imdb_id": string,
  "original_language": string,
  "original_title": string,
  isFavorite: boolean;
  vote_overage: string;
  title: string;
  "status": string,
  "tagline": string,
  "video": false,
  "vote_average": number,
  "vote_count": number,
  popularity: string;
  release_date: string;
  poster_path: string;
  overview: string;
  backdrop_path: string;
  "revenue": number,
  "runtime": number,
  "spoken_languages": [
    {
        "english_name": string,
        "iso_639_1": string,
        "name": string
    },
    {
        "english_name": string,
        "iso_639_1": string,
        "name": string
    }
],
"production_companies": [
  {
      "id": number,
      "logo_path": string,
      "name": string,
      "origin_country": string
  }
],
"production_countries": [
  {
      "iso_3166_1": string,
      "name": string
  }
],
};

export interface Film {
  "adult": boolean,
  "backdrop_path": string,
  "genre_ids": any[],
  "id": number,
  "original_language": string,
  "original_title": string,
  "overview": string,
  "popularity": number,
  "poster_path": string,
  "release_date": string,
  "title": string,
  "video": boolean,
  "vote_average": number,
  "vote_count": number
}

export const exampleFilm =         {
  "adult": false,
  "backdrop_path": "/70nxSw3mFBsGmtkvcs91PbjerwD.jpg",
  "genre_ids": [
      878,
      28,
      12
  ],
  "id": 580489,
  "original_language": "en",
  "original_title": "Venom: Let There Be Carnage",
  "overview": "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
  "popularity": 14703.522,
  "poster_path": "/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
  "release_date": "2021-09-30",
  "title": "Venom: Let There Be Carnage",
  "video": false,
  "vote_average": 7.2,
  "vote_count": 3643
};
