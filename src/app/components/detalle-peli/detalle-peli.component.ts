import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-peli',
  templateUrl: './detalle-peli.component.html',
  styleUrls: ['./detalle-peli.component.scss'],
})
export class DetallePeliComponent implements OnInit {
  @Input() id: any;

  constructor() {}

  ngOnInit() {
    console.log('el ID', this.id);
  }
}
