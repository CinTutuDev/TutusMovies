import { Component, OnInit, Input } from '@angular/core';
import { Pelis } from '../../interface/interfaces';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss'],
})
export class PosterComponent implements OnInit {

  @Input() posters: Pelis[] = [];

  constructor() {}
  options = {
    slidesPerView: 3.2,
    freeMode: true,
  };
  ngOnInit() {}
}
