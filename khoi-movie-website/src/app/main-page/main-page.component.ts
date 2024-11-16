import { Component } from '@angular/core';

export interface Movie {
  id: number;
  title: string;
  releaseYear: number;
  genre: string[];
  director: string;
  cast: string[];
  rating: number;
  duration: number; 
  synopsis?: string; 
  posterUrl?: string; 
}

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})

export class MainPageComponent {

  movies: Movie[] = [
    {
      id: 1,
      title: 'Inception',
      releaseYear: 2010,
      genre: ['Action', 'Sci-Fi', 'Thriller'],
      director: 'Christopher Nolan',
      cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page'],
      rating: 8.8,
      duration: 148,
      synopsis: 'A thief who steals corporate secrets through dream-sharing technology is tasked with planting an idea.',
      posterUrl: 'https://example.com/inception.jpg',
    },
    {
      id: 2,
      title: 'The Matrix',
      releaseYear: 1999,
      genre: ['Action', 'Sci-Fi'],
      director: 'The Wachowskis',
      cast: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
      rating: 8.7,
      duration: 136,
      synopsis: 'A hacker discovers the shocking truth about his reality and his role in the war against its controllers.',
      posterUrl: 'https://example.com/matrix.jpg',
    },
  ];
}

