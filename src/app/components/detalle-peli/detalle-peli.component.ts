import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-detalle-peli',
  templateUrl: './detalle-peli.component.html',
  styleUrls: ['./detalle-peli.component.scss'],
})
export class DetallePeliComponent implements OnInit {
  @Input() id: any;

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    /* console.log('el ID', this.id); */
    this.moviesService.getDetallePeli(this.id).subscribe((res) => {
      console.log('ID Pelis', res);
    });

    /* console.log('el ID', this.id); */
    this.moviesService.getDetalleActores(this.id).subscribe((res) => {
      console.log('ID Actores', res);
    });
  }
}
