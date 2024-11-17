import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private mockUser={
    username: "user",
    password: "123456"
  }

  movieList: Movie[] = [
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
      posterUrl: 'https://th.bing.com/th/id/OIP.SDeJ32DZYc-p3O_6N1z2gAHaKz?rs=1&pid=ImgDetMain',
      nation: "USA"
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
      posterUrl: 'https://th.bing.com/th/id/OIP.AyEukC9azVgBTDl6HcQmngHaK3?rs=1&pid=ImgDetMain',
      nation: "USA"
    },
    {
      id: 3,
      title: 'The Dark Knight',
      releaseYear: 2008,
      genre: ['Action', 'Crime', 'Drama'],
      director: 'Christopher Nolan',
      cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
      rating: 9.0,
      duration: 152,
      synopsis: 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
      posterUrl: 'https://th.bing.com/th?id=OIP.fHpPU6o1tvzQqqBoUR3mLAHaKw&w=207&h=301&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
      nation: "USA"
    },
    {
      id: 4,
      title: 'Interstellar',
      releaseYear: 2014,
      genre: ['Adventure', 'Drama', 'Sci-Fi'],
      director: 'Christopher Nolan',
      cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
      rating: 8.6,
      duration: 169,
      synopsis: 'A team of explorers must travel beyond this galaxy to discover whether mankind has a future among the stars.',
      posterUrl: 'https://th.bing.com/th?id=OIP.8A707ygGKj_-MsgM-gOchgHaKe&w=210&h=297&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
      nation: "USA"
    },
    {
      id: 5,
      title: 'Avatar',
      releaseYear: 2009,
      genre: ['Action', 'Adventure', 'Sci-Fi'],
      director: 'James Cameron',
      cast: ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver'],
      rating: 7.8,
      duration: 162,
      synopsis: 'A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
      posterUrl: 'https://th.bing.com/th?id=OIP.NqFYgMiuHbc_byT2CPCHAgHaJ8&w=215&h=289&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
      nation: "USA"
    },
    {
      id: 6,
      title: 'Jurassic Park',
      releaseYear: 1993,
      genre: ['Action', 'Adventure', 'Sci-Fi'],
      director: 'Steven Spielberg',
      cast: ['Sam Neill', 'Laura Dern', 'Jeff Goldblum'],
      rating: 8.1,
      duration: 127,
      synopsis: 'During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run wild.',
      posterUrl: 'https://th.bing.com/th?id=OIP.qFd8vzvz5DFKs8jFJwI4uAHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
      nation: "USA"
    },
    {
      id: 7,
      title: 'Guardians of the Galaxy',
      releaseYear: 2014,
      genre: ['Action', 'Adventure', 'Comedy'],
      director: 'James Gunn',
      cast: ['Chris Pratt', 'Zoe Saldana', 'Dave Bautista'],
      rating: 8.0,
      duration: 121,
      synopsis: 'A group of intergalactic criminals must pull together to stop a fanatical warrior from taking control of the universe.',
      posterUrl: 'https://th.bing.com/th?id=OIP.pYZChZzBUT3q4EBoDXFA-QHaK-&w=205&h=304&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
      nation: "USA"
    },
    {
      id: 8,
      title: 'The Lion King',
      releaseYear: 1994,
      genre: ['Animation', 'Adventure', 'Drama'],
      director: 'Roger Allers, Rob Minkoff',
      cast: ['Matthew Broderick', 'Jeremy Irons', 'James Earl Jones'],
      rating: 8.5,
      duration: 88,
      synopsis: 'A lion cub crown prince is cast out of his pride and leaves his kingdom only to learn the true meaning of responsibility and bravery.',
      posterUrl: 'https://th.bing.com/th?id=OIP.9yxvUHiTWP-sEgbvczFKYQAAAA&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
      nation: "USA"
    }
  ];


  private isLoggedInSubject = new BehaviorSubject<boolean>(false); //set log out as default state
  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable(); //set as observable so other component can access

  isShowingLoginFormSubject = new BehaviorSubject<boolean>(false);
  isShowingLoginForm$: Observable<boolean> = this.isShowingLoginFormSubject.asObservable();

  constructor() { }

  //set login state
  setLoginState(isLoggedIn:boolean){
    this.isLoggedInSubject.next(isLoggedIn)
  }
  //get login state
  getLoginState(){
    return this.isLoggedInSubject.getValue()
  }

  //set is showing login form
  setIsShowingLoginForm(isShowingLoginForm:boolean){
    this.isShowingLoginFormSubject.next(isShowingLoginForm);
  }
  //get is showing login form
  getIsShowingLoginForm(){
    return this.isShowingLoginFormSubject.getValue();
  }

  authenUser(inputUserName:string, inputPassword:string){
      return(
        this.mockUser.username === inputUserName &&
        this.mockUser.password == inputPassword
      )
  }

  //get movie list
  getMovieList(){
    return this.movieList
  }
}
