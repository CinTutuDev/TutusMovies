import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab3PageRoutingModule } from './tab3-routing.module';
/* hago el import para usar el componente de poster */
import { ComponentsModule } from "../components/components.module";
import { PipesModule } from "../pipes/pipes.module";

@NgModule({
    declarations: [Tab3Page],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ExploreContainerComponentModule,
        Tab3PageRoutingModule,
        ComponentsModule,
        PipesModule
    ]
})
export class Tab3PageModule {}
