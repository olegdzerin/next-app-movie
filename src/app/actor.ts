import { ActorDetailsComponent } from "./actor-details/actor-details/actor-details.component";


export interface ActorDetails {
    "adult": boolean,
    "also_known_as": any[],
    "biography": string | null,
    "birthday": string | null,
    "deathday": string | null,
    "gender": number,
    "homepage": any,
    "id": number,
    "imdb_id": string,
    "known_for_department": string,
    "name": string,
    "place_of_birth": string,
    "popularity": number,
    "profile_path": string | null,
    isFivorit?: boolean
}

export interface Actor {
    "adult": boolean,
    "gender": number,
    "id": number,
    "known_for": object[],
    "known_for_department": string,
    "name": string,
    "popularity": number,
    "profile_path": string
}

export const actorExempl: Actor = {
    "adult": false,
    "gender": 2,
    "id": 1215399,
    "known_for": [
        {
            "adult": false,
            "backdrop_path": "/4NdAMnBwSAaSsUjoXkcU5aW28RF.jpg",
            "genre_ids": [
                28,
                80,
                53
            ],
            "id": 273481,
            "media_type": "movie",
            "original_language": "en",
            "original_title": "Sicario",
            "overview": "An idealistic FBI agent is enlisted by a government task force to aid in the escalating war against drugs at the border area between the U.S. and Mexico.",
            "poster_path": "/tw0lXhbNkklvseuJ4aYldkVyXV7.jpg",
            "release_date": "2015-09-17",
            "title": "Sicario",
            "video": false,
            "vote_average": 7.4,
            "vote_count": 6548
        },
        {
            "adult": false,
            "backdrop_path": "/5nRuBuJyZjYcImekt5d9T7zUN1.jpg",
            "genre_ids": [
                80,
                18,
                9648,
                53
            ],
            "id": 395834,
            "media_type": "movie",
            "original_language": "en",
            "original_title": "Wind River",
            "overview": "An FBI agent teams with the town's veteran game tracker to investigate a murder that occurred on a Native American reservation.",
            "poster_path": "/pySivdR845Hom4u4T2WNkJxe6Ad.jpg",
            "release_date": "2017-08-03",
            "title": "Wind River",
            "video": false,
            "vote_average": 7.4,
            "vote_count": 3814
        },
        {
            "adult": false,
            "backdrop_path": "/GZx3RAiTJAhXOdhLLyCAbqRl11.jpg",
            "genre_ids": [
                37,
                80
            ],
            "id": 338766,
            "media_type": "movie",
            "original_language": "en",
            "original_title": "Hell or High Water",
            "overview": "A divorced dad and his ex-con brother resort to a desperate scheme in order to save their family's farm in West Texas.",
            "poster_path": "/ljRRxqy2aXIkIBXLmOVifcOR021.jpg",
            "release_date": "2016-08-12",
            "title": "Hell or High Water",
            "video": false,
            "vote_average": 7.3,
            "vote_count": 3533
        }
    ],
    "known_for_department": "Writing",
    "name": "Taylor Sheridan",
    "popularity": 91.967,
    "profile_path": "/vdGTrPJG95AhBXr3xId5Fj8cTCu.jpg"
}

