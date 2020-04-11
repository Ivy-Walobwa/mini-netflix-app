import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { MovieDbResponse, SingleMovie, Movie } from '../models/movie';
import { Router } from '@angular/router';


@Injectable()

export class MoviesService {
  private apiKey = '?api_key=d01149a7f4a54d4c74dd3e40994ea043';
  private apiUrl = 'https://api.themoviedb.org/3/movie';
  private searchUrl = 'https://api.themoviedb.org/3/search/movie';

  constructor(private http: HttpClient, private router: Router) {
   }

  // get movie collection
  getMovies(): Observable<Movie[]> {
    return this.http.get<MovieDbResponse>(`${this.apiUrl}/popular${this.apiKey}`)
      .pipe(
        map(res => {
          return res.results;
        }),
        catchError(this.handleError<Movie[]>('getMovies', [] ))
      );
  }

  // get single movie
  getMovie(id: number): Observable<SingleMovie> {
    return this.http.get<SingleMovie>(`${this.apiUrl}/${id}${this.apiKey}`)
      .pipe(
        catchError(this.handleError<SingleMovie>(`getMovie id=${id}`))
    );
  }

  // get movies whose name contain search term
  searchMovie(term: string): Observable<Movie[]> {
  if (!term.trim()) {
    return of([]);
  }
  return this.http.get<MovieDbResponse>(`${this.searchUrl}${this.apiKey}&query=${term}`)
      .pipe(
        map(res => {
         return res.results;
        }),
    catchError(this.handleError<Movie[]>('getMovies', []))
  );
  }

  // handle http error
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      this.router.navigate(['/404'], {skipLocationChange:true});
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
