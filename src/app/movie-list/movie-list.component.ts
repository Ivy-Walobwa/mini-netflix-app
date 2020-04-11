import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: `
  <div></div>
  <app-carousel-holder  [movies]='moviesArray' [imageUrl]='imageBaseUrl'></app-carousel-holder>
  `,
  styles: [`
  div{
    height: 40px;
  }
  `]
})

export class MovieListComponent implements OnInit {
  moviesArray: Movie[];
  imageBaseUrl = 'https://image.tmdb.org/t/p/original';

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    const resolvedData: Movie[] = this.route.snapshot.data.resolvedMovies;
    this.moviesArray = resolvedData;
  }

}
