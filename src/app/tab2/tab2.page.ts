import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MoviesService } from '../services/movies.service';
import { Pelis } from 'src/app/interface/interfaces';
import { DetallePeliComponent } from '../components/detalle-peli/detalle-peli.component';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  /*  @Input() pelis: Pelis[] = []; */
  textoBuscar = '';
  buscando = false;
  peliculas: Pelis[] | any = [];
  ideas: string[] = [
    'Spiderman',
    'Avenger',
    'El señor de los anillos',
    'La vida es bella',
  ];

  constructor(
    private moviesService: MoviesService,
    private modalCtrl: ModalController
  ) {}

  buscar(event: any) {
    const valor: string = event.detail.value;

    if (valor.length === 0) {
      this.buscando = false;
      this.peliculas = [];
      return;
    }

    // console.log(valor);
    this.buscando = true;

    this.moviesService
      .getBuscarPeliculas(valor)
      //El error unknown resuelto con :any
      .subscribe((res: any) => {
        console.log(res);
        this.peliculas = res['results'];
        this.buscando = false;
      });
  }

  async detalle(id: string) {
    const modal = await this.modalCtrl.create({
      component: DetallePeliComponent,
      componentProps: {
        id,
      },
    });

    modal.present();
  }
}
