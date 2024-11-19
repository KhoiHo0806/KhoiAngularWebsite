import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-watch-page',
  standalone: true,
  imports: [],
  templateUrl: './watch-page.component.html',
  styleUrl: './watch-page.component.css'
})
export class WatchPageComponent {

  movieId: number | null = null;
  movie:Movie | null = null

  constructor(private route: ActivatedRoute,private dataService: DataService) {}

  ngOnInit(): void {
    //get movie id from path param
    this.movieId =Number(this.route.snapshot.paramMap.get('id')) ;
    //get movie from id
    this.movie = this.dataService.getMovieById(this.movieId);
  }
}
