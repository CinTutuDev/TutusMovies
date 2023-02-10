import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MoviesService } from '../services/movies.service';
import { Pelis } from 'src/app/interface/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  buscaText = '';
  buscando = false;
  peliculas: Pelis[] | unknown  = [];
  ideas: string[] = [
    'Spiderman',
    'Avenger',
    'El señor de los anillos',
    'La vida es bella',
  ];

  /* public results = [...this.ideas]; */

  constructor(private movieService: MoviesService) {}

  buscador(event: any) {
    const valor: string = event.detail.value;

    if (valor.length === 0) {
      this.buscando = false;
      this.peliculas = [];
      return;
    }
    // console.log(valor);
    this.buscando = true;
    //console.log(valor);
    this.movieService.buscarPeliculas(valor).subscribe((resp) => {
      console.log(resp);
    this.peliculas = resp['results'];
      this.buscando = false;
    });
  }
}
