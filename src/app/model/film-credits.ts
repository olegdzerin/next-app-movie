export interface FilmCast {
    "adult": boolean,
    "gender": 1 | 2,
    "id": number,
    "known_for_department": string,
    "name": string,
    "original_name": string,
    "popularity": number,
    "profile_path": string,
    "cast_id": number,
    "character": string,
    "credit_id": string,
    "order"?: number,
}

export interface FilmCrew {
    "adult": boolean,
    "gender": 1|2,
    "id": number,
    "known_for_department": string,
    "name": string,
    "original_name": string,
    "popularity": number,
    "profile_path": string,
    "credit_id": string,
    "department": string,
    "job": string
}




export interface FilmCredits {
    id: number;
    cast: FilmCast[],
    crew: FilmCrew[]
}