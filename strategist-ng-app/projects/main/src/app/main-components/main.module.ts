import {NgModule} from '@angular/core';

import {MainRoutingModule} from './main-routing.module';
import {HomeComponent} from "./home/home.component";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    MainRoutingModule,
  ],
})
export class MainModule {
}
