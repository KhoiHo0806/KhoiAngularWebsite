import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faPlay} from '@fortawesome/free-solid-svg-icons'
import { Movie } from '../model/movie';
import { DataService } from '../service/data.service';



@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})

export class MainPageComponent {
//font awesome icons
  faPlay = faPlay

  selectedMovie: Movie | null = null;
  movieList: Movie[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(){
    this.movieList = this.dataService.getMovieList()
  }
}

