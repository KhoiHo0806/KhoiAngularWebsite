import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faPlay, faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import { Movie } from '../model/movie';
import { DataService } from '../service/data.service';
import { NgStyle } from '@angular/common';



@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [FontAwesomeModule, NgStyle],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})

export class MainPageComponent {
//font awesome icons
  faPlay = faPlay;
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;

  selectedMovie: Movie | null = null;
  movieList: Movie[] = [];

  movieListTransformValue: number = 0;
  movieItemWidth: number = 220;

  constructor(private dataService: DataService) {}

  ngOnInit(){
    this.movieList = this.dataService.getMovieList()
  }

  moveLeft(){
    if(this.movieListTransformValue < 0){
      this.movieListTransformValue += this.movieItemWidth
    }
  }

  moveRight(){
    if(this.movieListTransformValue > -(this.movieList.length - 5) * this.movieItemWidth){
      this.movieListTransformValue -=this.movieItemWidth
    }
  }
}

