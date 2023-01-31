import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';
import { Pelis } from '../../interface/interfaces';

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
      component: ModalComponent,
      componentProps: { id },
    });
    modal.present();
  }
}
