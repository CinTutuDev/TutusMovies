import { Component, Input, OnInit } from '@angular/core';
import { Cast, DetallePelis } from 'src/app/interface/interfaces';
import { MoviesService } from '../../services/movies.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-peli',
  templateUrl: './detalle-peli.component.html',
  styleUrls: ['./detalle-peli.component.scss'],
})
export class DetallePeliComponent implements OnInit {
  @Input() id: any;

  peli: DetallePelis | any = {};
  actores: Cast[] | any = [];
  parrafo = 150;

  optionActores = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -5,
    /*  stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true, */
  };

  constructor(private moviesService: MoviesService, private modalCtrl: ModalController) {}

  ngOnInit() {
    /* console.log('el ID', this.id); */
    this.moviesService.getDetallePeli(this.id).subscribe( resp => {
      console.log( resp );
      this.peli = resp;
    });

    /* console.log('el ID', this.id); */
    this.moviesService.getDetalleActores(this.id).subscribe((res) => {
      console.log('ID Actores', res);
      this.actores = res.cast;
    });
  }

  //para regresar a inicio necesito el ModalControler
  inicio(){
    this.modalCtrl.dismiss();
  }

  favoritos(){}
}
