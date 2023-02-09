import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public ideas = ['Spiderman', 'Avenger', 'El señor de los anillos', 'La vida es bella'];

  public results = [...this.ideas];

  buscaText = '';

  constructor( private movieService: MoviesService ) {}

  
  buscador(event:any){
    console.log(event);
    const queryValue = event.target.value.toLowerCase();
    /* this.results = this.ideas.filter(d => d.toLowerCase().indexOf(queryValue) > -1); */
    this.movieService.getBuscarPeli(queryValue).subscribe( result =>{
      console.log(result);
    })
  }
}
