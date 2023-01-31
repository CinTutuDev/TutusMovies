import { PipesModule } from './../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlidesComponent } from './slides/slides.component';
import { PosterComponent } from './poster/poster.component';
import { SlidesTwoComponent } from './slides-two/slides-two.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  entryComponents: [ModalComponent],
  declarations: [
    SlidesComponent,
    PosterComponent,
    SlidesTwoComponent,
    ModalComponent,
  ],
  exports: [
    SlidesComponent,
    PosterComponent,
    SlidesTwoComponent,
    ModalComponent,
  ],
  imports: [CommonModule, IonicModule, PipesModule],
})
export class ComponentsModule {}
