import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class SearchAndFilterService {

    movieList:Movie[] | null = null

    constructor(private dataService: DataService) {
      this.movieList = this.dataService.getMovieList();
    }

  filterMovie(option: string, optionName: any): Movie[] | null {
    if (!this.movieList) {
      return null; // Return null if movieList is null or undefined 
    }
  
    let filteredMovies: Movie[];
  
    if (option === "Genre") {
      filteredMovies = this.movieList.filter((movie) => movie.genre.includes(optionName));
    } else if (option === "Nation") {
      filteredMovies = this.movieList.filter((movie) => movie.nation === optionName);
    } else {
      filteredMovies = this.movieList.filter((movie) => movie.releaseYear === Number(optionName));
    }
  
    // If no movies are found, return null
    return filteredMovies.length > 0 ? filteredMovies : null;
  }

  searchMovie(searchString: string): Movie[] | null{
    if (!this.movieList) {
      return null; // Return null if movieList is null or undefined 
    }

    const lowerCaseSearchString = searchString.toLowerCase();
  
    return this.movieList.filter((movie) =>{
      return movie.title.toLowerCase().includes(lowerCaseSearchString);
    })
  }

}
