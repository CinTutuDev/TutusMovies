import { ResultTMDB } from './../interface/interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getCartelera(){
    return this.http.get<ResultTMDB>(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2023-01-01&primary_release_date.lte=2023-12-31&api_key=f76b1a94f37a496866a10143a5baf98e&language=es&include_image_lenguage=es`)
  }

}
