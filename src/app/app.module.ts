import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {HttpClientModule} from "@angular/common/http";
import { CommonErrorComponent } from './components/common-error/common-error.component';
import {SharedModule} from "./modules/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CommonErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
