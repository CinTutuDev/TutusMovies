import { Component, Input, OnInit } from '@angular/core';
import { Pelis } from 'src/app/interface/interfaces';

@Component({
  selector: 'app-slides-two',
  templateUrl: './slides-two.component.html',
  styleUrls: ['./slides-two.component.scss'],
})
export class SlidesTwoComponent implements OnInit {

  @Input() postersTwo: Pelis[] = [];

  constructor() {}

  options : any = {
    slidesPerView: 3.3,
    freeMode: true,
    slidesPerColumn: 1,
    slidesPerColumnFill: 'row',
    spaceBetween: -10
  };
  
  ngOnInit() {}
}
