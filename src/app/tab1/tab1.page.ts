import { Pelis } from './../interface/interfaces';
import { MoviesService } from './../services/movies.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  pelisNews: Pelis[] = [] ;

  options = {
    slidesPerView: 1.2,
    freeMode: true,
  }

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
      this.moviesService.getCartelera().subscribe((result )  =>{
        console.log('Resultados',result.results);
        this.pelisNews = result.results;
    
      })
  }

}
