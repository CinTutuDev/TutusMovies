import { PipesModule } from './../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlidesComponent } from './slides/slides.component';
import { PosterComponent } from './poster/poster.component';
import { SlidesTwoComponent } from './slides-two/slides-two.component';
import { DetallePeliComponent } from './detalle-peli/detalle-peli.component';

@NgModule({
  //Se pone para acceder a todos los atributos results desde cualquier componente con :
  // import { Component, Input, OnInit } from '@angular/core';
  //@Input() id: any;
  entryComponents: [DetallePeliComponent],
  declarations: [
    SlidesComponent,
    PosterComponent,
    SlidesTwoComponent,
    DetallePeliComponent,
  ],
  exports: [
    SlidesComponent,
    PosterComponent,
    SlidesTwoComponent,
    DetallePeliComponent,
  ],
  imports: [CommonModule, IonicModule, PipesModule],
})
export class ComponentsModule {}

export { DetallePeliComponent };
