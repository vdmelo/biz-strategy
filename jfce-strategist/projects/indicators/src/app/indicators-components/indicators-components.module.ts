import { NgModule } from '@angular/core';
import { IndicatorsPanelComponent } from './indicators-panel/indicators-panel.component';
import {IndicatorsComponentsRoutingModule} from "./indicators-components-routing.module";

@NgModule({
  declarations: [
    IndicatorsPanelComponent
  ],
  imports: [
    IndicatorsComponentsRoutingModule
  ],
  providers: []
})
export class IndicatorsComponentsModule { }
