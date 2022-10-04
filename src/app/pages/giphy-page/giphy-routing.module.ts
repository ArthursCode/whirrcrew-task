import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GiphyPageComponent} from "./giphy-page.component";


const routes: Routes = [
  {
    path: '',
    component: GiphyPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GiphyRoutingModule { }
