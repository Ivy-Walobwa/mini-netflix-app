import { Component, OnInit } from '@angular/core';
import { MoviesService } from './shared/movies.service';

@Component({
  template: `
  <app-navbar></app-navbar>
  <div></div>
  <app-carousel-holder  [movies]='moviesArray'></app-carousel-holder>
  `,
  styles: [`
  div{
    height: 40px;
  }
  `]
})

export class MovieListComponent implements OnInit {
  moviesArray: any;

  constructor(private movieService: MoviesService) {

  }

  ngOnInit() {
    this.moviesArray = this.movieService.getMovies();
  }
}
