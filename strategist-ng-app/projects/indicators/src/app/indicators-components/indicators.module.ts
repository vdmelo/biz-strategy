import { NgModule } from '@angular/core';
import { IndicatorsPanelComponent } from './indicators-panel/indicators-panel.component';
import {IndicatorsRoutingModule} from "./indicators-routing.module";

@NgModule({
  declarations: [
    IndicatorsPanelComponent
  ],
  imports: [
    IndicatorsRoutingModule
  ],
  providers: []
})
export class IndicatorsModule { }
