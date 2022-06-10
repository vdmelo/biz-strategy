import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndicatorsPanelComponent} from "./indicators-panel/indicators-panel.component";

const routes: Routes = [
  {
    path: '',
    component: IndicatorsPanelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndicatorsComponentsRoutingModule { }
