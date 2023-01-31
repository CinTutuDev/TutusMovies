import { Pelis } from './../../interface/interfaces';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {
  @Input() pelis: Pelis[] = [];

  options = {
    slidesPerView: 1.2,
    freeMode: true,
  };

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  async detailPeli(id: number) {
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      componentProps: { id },
    });
    modal.present();
  }
}
