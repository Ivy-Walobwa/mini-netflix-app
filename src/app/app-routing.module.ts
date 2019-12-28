import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MoviDetailsComponent } from './movi-details/movi-details.component';

const routes: Routes = [
  {path: 'home', component: MovieListComponent},
  {path: 'home/:objectId', component: MoviDetailsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
