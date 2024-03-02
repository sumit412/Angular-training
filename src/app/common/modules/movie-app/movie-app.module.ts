import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MovieRoutingModule } from './movie-app-routing.module';



@NgModule({
  declarations: [
    MovieSearchComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class MovieAppModule { }
