import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faPlay, faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import { Movie } from '../model/movie';
import { DataService } from '../service/data.service';
import { NgStyle } from '@angular/common';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [FontAwesomeModule, NgStyle, RouterLink],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})

export class MainPageComponent {
//font awesome icons
  faPlay = faPlay;
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;

  featuredMovie: Movie | null = null;
  movieList: Movie[] = [];
  

  movieListTransformValue: number = 0;
  movieItemWidth: number = 220;
  testNum: number = 0;

  constructor(private dataService: DataService) {}

  ngOnInit(){
    this.movieList = this.dataService.getMovieList()
    this.featuredMovie = this.movieList[0]
  }


  moveLeft(){
    if(this.movieListTransformValue < 0){
      this.movieListTransformValue += this.movieItemWidth;
    }
  }

  moveRight(){
    if(this.movieListTransformValue > -(this.movieList.length - 5) * this.movieItemWidth){
      this.movieListTransformValue -= this.movieItemWidth;
    }
  }


  getFeaturedMovie(selectedMovie:Movie){
    this.featuredMovie = selectedMovie;
  }
}

