import { PipesModule } from './../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlidesComponent } from './slides/slides.component';
import { PosterComponent } from './poster/poster.component';

@NgModule({
  declarations: [SlidesComponent, PosterComponent],
  exports: [SlidesComponent, PosterComponent],
  imports: [CommonModule, IonicModule, PipesModule],
})
export class ComponentsModule {}
