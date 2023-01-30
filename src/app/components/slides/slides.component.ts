import { Pelis } from './../../interface/interfaces';
import { Component, Input, OnInit } from '@angular/core';

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
  }

  constructor() { }

  ngOnInit() {}

}
