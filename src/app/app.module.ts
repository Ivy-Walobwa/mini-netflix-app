import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { CarouselHolderComponent } from './movie-list/carousel-holder.component';
import { MoviesService } from './services/movies.service';
import { AppRoutingModule } from './app-routing.module';
import { MoviDetailsComponent } from './movi-details/movi-details.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { AddHeaderInterceptor } from './http-interceptors/add-header.interceptor';
import { LogResponseInterceptor } from './http-interceptors/log-response.interceptor';
import { CacheInterceptor } from './http-interceptors/cache.interceptor';
import { Err404Component } from './err404/err404.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MovieListComponent,
    CarouselHolderComponent,
    MoviDetailsComponent,
    MovieSearchComponent,
    Err404Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
  ],
  providers: [
    MoviesService,
    { provide: HTTP_INTERCEPTORS, useClass: AddHeaderInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LogResponseInterceptor,
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
