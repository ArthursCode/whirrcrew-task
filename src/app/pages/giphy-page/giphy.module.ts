import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {GiphyPageComponent} from "./giphy-page.component";
import {GiphyRoutingModule} from "./giphy-routing.module";
import {SharedModule} from "../../modules/shared.module";



@NgModule({
  declarations: [
    GiphyPageComponent
  ],
  imports: [
    CommonModule,
    GiphyRoutingModule,
    MatGridListModule,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule,

    SharedModule
  ],
  exports: [GiphyPageComponent]
})
export class GiphyModule { }
