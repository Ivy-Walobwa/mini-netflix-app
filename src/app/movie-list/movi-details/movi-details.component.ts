import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../shared/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './movi-details.component.html',
  styleUrls: ['./movi-details.component.css']
})

export class MoviDetailsComponent implements OnInit {

  movie: any;

  constructor( private movieService: MoviesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.movie = this.movieService.getMovie(+this.route.snapshot.params.objectId);
  }

}
