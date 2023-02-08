import { DetallePeliComponent } from './../detalle-peli/detalle-peli.component';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Pelis } from 'src/app/interface/interfaces';
import { EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-slides-two',
  templateUrl: './slides-two.component.html',
  styleUrls: ['./slides-two.component.scss'],
})
export class SlidesTwoComponent implements OnInit {
  @Input() postersTwo: Pelis[] = [];
  @Output() cargarMas = new EventEmitter();

  constructor(private modalCtrl: ModalController) {}

  onClick() {
    this.cargarMas.emit();
  }

  options = {
    slidesPerView: 3.3,
    freeMode: true,
    slidesPerColumn: 1,
    slidesPerColumnFill: 'row',
    spaceBetween: -10,
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
