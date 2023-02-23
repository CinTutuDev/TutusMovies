import { ResultTMDB, DetallePelis, Genre } from './../interface/interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import * as moment from 'moment';


const url = environment.url;
const key = environment.apiKey;

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private popularPage = 0;
  generos: Genre[] = [];

  constructor(private http: HttpClient) {}

  private ejecutarQuery<T>(query: string) {
    query = url + query;
    query += `&api_key=${key}&language=es&include_image_lenguage=es`;
    /* console.log(query); */
    return this.http.get<T>(query);
  }

  getPopulares() {
    this.popularPage++;

    const query = `/discover/movie?sort_by=popularity.desc&page=${this.popularPage}`;
    return this.ejecutarQuery<ResultTMDB>(query);
  }

  getCartelera() {
    const startOfMonth = moment().startOf('month').format('YYYY-MM-DD');
    const endOfMonth = moment().endOf('month').format('YYYY-MM-DD');
    /*   console.log( startOfMonth,'\n',endOfMonth); */
    return this.ejecutarQuery<ResultTMDB>(
      `/discover/movie?primary_release_date.gte=${startOfMonth}&primary_release_date.lte=${endOfMonth}`
    );
  }

  getDetallePeli(id: number) {
    return this.ejecutarQuery<DetallePelis>(`/movie/${id}?a=1`);
  }
  /* https://developers.themoviedb.org/3/movies/get-movie-details */
  getDetalleActores(id: number) {
    return this.ejecutarQuery<DetallePelis>(`/movie/${id}/credits?a=1`);
  }
  /* https://developers.themoviedb.org/3/search/search-movies */
  getBuscarPeliculas(texto: string) {
    return this.ejecutarQuery(`/search/movie?query=${texto}`);
  }

  getCargaGenero(): Promise<Genre[]> {

    return new Promise(resolve =>{

      this.ejecutarQuery(`/genre/movie/list?a=1`).subscribe((resp: any) =>{
        this.generos = resp['genres'];
        console.log(this.generos);
        resolve(this.generos);
      })
    })

  }
}
