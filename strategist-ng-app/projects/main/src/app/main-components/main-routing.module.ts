import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";

export const MAIN_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'indicators',
        loadChildren: () => import('indicators/Module').then(m => m.IndicatorsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(MAIN_ROUTES)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
