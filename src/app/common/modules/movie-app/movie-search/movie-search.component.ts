// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-movie-search',
//   templateUrl: './movie-search.component.html',
//   styleUrls: ['./movie-search.component.css']
// })
// export class MovieSearchComponent {
//   username: string = '';
//   movieName: string = '';
//   movieDetails: any;
//   constructor(private http: HttpClient) {
    
//   }
//   ngOnInit() {
//     // this.searchMovie()
//   }
//   searchMovie() {
//     const apiKey = 'd144a6a5';
//     const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&t=${this.movieName}`;
//     this.http.get(apiUrl).subscribe((data: any) => {
//       this.movieDetails = data;
//     });
//   }
// }
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent {
  username: string = '';
  movieName: string = '';
  movieDetails: any;
  loading: boolean = false;

  constructor(private http: HttpClient) { }
  
  searchMovie() {
    this.loading = true;
    const apiKey = 'd144a6a5';
    const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&t=${this.movieName}`;
    this.http.get(apiUrl).subscribe((data: any) => {
      this.movieDetails = data;
      this.loading = false;
    });
  }
}
