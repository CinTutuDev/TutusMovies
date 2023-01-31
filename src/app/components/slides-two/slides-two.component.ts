import { Component, Input, OnInit, Output } from '@angular/core';
import { Pelis } from 'src/app/interface/interfaces';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slides-two',
  templateUrl: './slides-two.component.html',
  styleUrls: ['./slides-two.component.scss'],
})
export class SlidesTwoComponent implements OnInit {

  @Input() postersTwo: Pelis[] = [];
  @Output() cargarMas = new EventEmitter();
  constructor() {}
  onClick(){
   this.cargarMas.emit();
  }

  options = {
    slidesPerView: 3.3,
    freeMode: true,
    slidesPerColumn: 1,
    slidesPerColumnFill: 'row',
    spaceBetween: -10
  };
  

  ngOnInit() {}
}
