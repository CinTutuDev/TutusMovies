import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Pelis } from '../../interface/interfaces';
import { DetallePeliComponent } from '../detalle-peli/detalle-peli.component';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss'],
})
export class PosterComponent implements OnInit {
  @Input() posters: Pelis[] = [];

  constructor(private modalCtrl: ModalController) {}
  options = {
    slidesPerView: 3.2,
    freeMode: true,
  };
  ngOnInit() {}

  async detailPeli(id: number) {
    const modal = await this.modalCtrl.create({
      component: DetallePeliComponent,
      componentProps: { id },
    });
    modal.present();
  }
}
