import { StorageService } from './../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetallePelis} from '../interface/interfaces';
import { DetallePeliComponent } from '../components/components.module';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  pelis: DetallePelis[] | any = [];

  constructor(private dataLocal: StorageService, private modalCtrl: ModalController ) {}

  async ngOnInit() {
    this.pelis =  await this.dataLocal.getCargarFavoritos();
  }
  async detailPeliClick(id:number){
    const modal = await this.modalCtrl.create({
      component: DetallePeliComponent,
      componentProps: { id },
    });
    modal.present();
  }

}
