import { PipesModule } from './../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlidesComponent } from './slides/slides.component';
import { PosterComponent } from './poster/poster.component';
import { SlidesTwoComponent } from "./slides-two/slides-two.component";

@NgModule({
  declarations: [SlidesComponent, PosterComponent, SlidesTwoComponent],
  exports: [SlidesComponent, PosterComponent, SlidesTwoComponent],
  imports: [CommonModule, IonicModule, PipesModule],
})
export class ComponentsModule {}
