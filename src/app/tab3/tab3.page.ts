import { StorageService } from './../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetallePelis, Genre } from '../interface/interfaces';
import { DetallePeliComponent } from '../components/components.module';
import { MoviesService } from '../services/movies.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  pelis: DetallePelis[] | any = [];
  genres: Genre[] = [];

  constructor(private dataLocal: StorageService, private modalCtrl: ModalController, private movieService: MoviesService ) {}

  async ngOnInit() {
    this.pelis =  await this.dataLocal.getCargarFavoritos();
    this.genres = await this.movieService.getCargaGenero();
    console.log(this.pelis);
  }
  async detailPeliClick(id:number){
    const modal = await this.modalCtrl.create({
      component: DetallePeliComponent,
      componentProps: { id },
    });
    modal.present();
  }

}
