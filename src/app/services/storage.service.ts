import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { DetallePelis, Pelis } from '../interface/interfaces';
import { ToastController } from '@ionic/angular';
@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private _storage: Storage | null = null;
  pelis: DetallePelis[] = [];

  constructor(
    private storage: Storage,
    private toastController: ToastController
  ) {
    this.initDB();
    this.getCargarFavoritos();
  }

  async initDB() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 1500,
    });

    await toast.present();
  }

  /* llamo a la interface para guardar peli */
  getGuardoPeli(peli: DetallePelis) {
    let existePeli = false;
    let msg = '';

    for (const iterator of this.pelis) {
      if (iterator.id === peli.id) {
        existePeli = true;
        break;
      }
    }

    if (existePeli) {
      /* Aquí es cuando existe */
      this.pelis = this.pelis.filter((peliFil) => peliFil.id !== peli.id);
      msg = 'Borrado de favoritos';
    } else {
      /* cuando no existe */
      this.pelis.push(peli);
      msg = 'Guardado en favoritos';
    }

    /* guardamos en el array pelis  y grabamos/guardamos en el storage ;: esto muestra los msg*/
    this.presentToast(msg);
    this.storage.set('peliculas', this.pelis);
    /* console.log(this.pelis); */
  }

  /* cargar favoritos */

  async getCargarFavoritos() {
    const peliculasFavorit = await this.storage.get('peliculas');
    this.pelis = peliculasFavorit || [];
    return this.pelis;
  }

  async getExistePeli(id: number) {
    await this.getCargarFavoritos();
    const existePeli = this.pelis.find((peli) => peli.id === id);
    /* si exite retorna true y si no false */
    return existePeli ? true : false;
  }
}
