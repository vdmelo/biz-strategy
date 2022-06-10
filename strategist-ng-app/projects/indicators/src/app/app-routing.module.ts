import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const INDICATORS_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('./indicators-components/indicators.module').then(m => m.IndicatorsModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(INDICATORS_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
