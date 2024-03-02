import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { FormsModule } from '@angular/forms';
import{ HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    MovieSearchComponent
  ],
  imports: [
    CommonModule,
    MovieAppModule,
    FormsModule,
    HttpClientModule
  ]
})
export class MovieAppModule { }
