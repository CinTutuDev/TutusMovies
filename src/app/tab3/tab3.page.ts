import { StorageService } from './../services/storage.service';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetallePelis, Genre } from '../interface/interfaces';
import { DetallePeliComponent } from '../components/components.module';
import { MoviesService } from '../services/movies.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  peliculas: DetallePelis[] | any = [];
  generos: Genre[] = [];
  pelisFavGenre: any[] = [];
  pelis: any;

  constructor(
    private dataLocal: StorageService,
    private modalCtrl: ModalController,
    private movieService: MoviesService
  ) {}

  /* se va a disparar cada vez que se vaya a entrar*/
  async ionViewWillEnter() {
    this.peliculas = await this.dataLocal.getCargarFavoritos();
    this.generos = await this.movieService.getCargaGenero();
    this.pelisPorGenre(this.generos, this.peliculas);
  }

  pelisPorGenre(generos: Genre[], peliculas: DetallePelis[]) {
    this.pelisFavGenre = [];

    generos.forEach((genero) => {
      this.pelisFavGenre.push({
        genero: genero.name,
        pelis: peliculas.filter((peli) => {
          return peli.genres?.find((genre) => genre.id === genero.id);
        }),
      });
    });

    console.log(this.pelisFavGenre);
  }

  async detailPeliClick(id: number) {
    const modal = await this.modalCtrl.create({
      component: DetallePeliComponent,
      componentProps: { id },
    });
    modal.present();
  }
}
