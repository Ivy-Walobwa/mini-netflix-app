import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { CarouselHolderComponent } from './movie-list/carousel-holder.component';
import { MoviesService } from './services/movies.service';
import { AppRoutingModule } from './app-routing.module';
import { MoviDetailsComponent } from './movi-details/movi-details.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MovieListComponent,
    CarouselHolderComponent,
    MoviDetailsComponent,
    MovieSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    RouterModule.forRoot([]),
    AppRoutingModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
