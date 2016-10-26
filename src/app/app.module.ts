import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilmModule } from './film/film.module';
import { HomeComponent } from './home/home.component';
import { AppRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FilmModule,
    AppRoutes
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
