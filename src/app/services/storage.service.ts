import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { DetallePelis } from '../interface/interfaces';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private _storage: Storage | null = null;
  pelis: DetallePelis[] = [];

  constructor(private storage: Storage) {
    this.initDB();
  }

  async initDB() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  /* llamo a la interface para guardar peli */
  getGuardoPeli(peli: DetallePelis) {
    this.pelis.push(peli);
    /* guardamos en el array pelis  y grabamos/guardamos en el storage */
    this.storage.set('peliculas', this.pelis);
    console.log(this.pelis);
  }
}
