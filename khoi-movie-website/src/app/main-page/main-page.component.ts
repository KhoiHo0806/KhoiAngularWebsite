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

  featuredMovie: Movie | null = null;
  movieList: Movie[] = [];
  displayedMovies: Movie[] = [];

  movieListTransformValue: number = 0;
  movieItemWidth: number = 220;
  testNum: number = 0;
  // firstLoadAnimation:boolean = true;  
  // rightSlideAnimation:boolean = false;
  // leftSlideAnimation:boolean = false;

  constructor(private dataService: DataService) {}

  ngOnInit(){
    this.movieList = this.dataService.getMovieList()
    this.getFeaturedMovie()
    // this.runFirstLoadAnimation()
  }

  // runFirstLoadAnimation() {
  //   setTimeout(() => {
  //     this.firstLoadAnimation = false;
  //   }, 1000);
  // }

  moveLeft(){
    if(this.movieListTransformValue < 0){
      this.movieListTransformValue += this.movieItemWidth;
      // this.leftSlideAnimation = true;
      // setTimeout(()=>{
      //   this.leftSlideAnimation = false
      // },500)
    }
  }

  moveRight(){
    if(this.movieListTransformValue > -(this.movieList.length - 5) * this.movieItemWidth){
      this.movieListTransformValue -=this.movieItemWidth
      // this.rightSlideAnimation = true;
      // setTimeout(()=>{
      //   this.rightSlideAnimation = false
      // },500)
    }
  }

  testClick(){
    this.testNum += 1;
  }

  getFeaturedMovie(){
    const movieIndex: number = Math.abs(this.movieListTransformValue) / this.movieItemWidth; 
    this.featuredMovie = this.movieList[movieIndex];
  }
}

