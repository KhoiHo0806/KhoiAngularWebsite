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
      synopsis: 'Dom Cobb, a thief skilled in stealing secrets from the subconscious through dreams, is offered a chance to clear his name by performing the impossible: inception—implanting an idea in someone’s mind. As Cobb and his team dive into layered dreamscapes, the line between reality and dreams blurs, threatening their mission and their lives.',
      posterUrl: 'https://th.bing.com/th/id/OIP.SDeJ32DZYc-p3O_6N1z2gAHaKz?rs=1&pid=ImgDetMain',
      coverImageUrl:'http://images2.fanpop.com/image/photos/12300000/Inception-Wallpaper-inception-2010-12396931-1440-900.jpg',
      nation: "USA",
      movieUrl: 'inception.mp4'
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
      synopsis: 'Computer hacker Neo discovers the shocking truth: the world he knows is a simulated reality called the Matrix, controlled by intelligent machines. With the help of a mysterious group led by Morpheus, Neo learns he might be humanity prophesied savior in the fight to reclaim their freedom.',
      posterUrl: 'https://th.bing.com/th/id/OIP.AyEukC9azVgBTDl6HcQmngHaK3?rs=1&pid=ImgDetMain',
      coverImageUrl:'https://i.ytimg.com/vi/EweuTOz7g-g/maxresdefault.jpg',
      nation: "USA",
      movieUrl: 'theMatrix.mp4'
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
      synopsis: 'Batman faces his greatest challenge yet as the Joker, a criminal mastermind, unleashes chaos on Gotham City. With the help of Commissioner Gordon and Harvey Dent, Batman must confront his own limits and make impossible choices to stop the anarchic villain’s reign of terror.',
      posterUrl: 'https://th.bing.com/th?id=OIP.fHpPU6o1tvzQqqBoUR3mLAHaKw&w=207&h=301&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
      coverImageUrl:'https://images4.alphacoders.com/573/57394.jpg',
      nation: "USA",
      movieUrl: 'theMatrix.mp4'
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
      synopsis: 'In a future where Earth is becoming uninhabitable, a former pilot, Cooper, joins a daring mission through a wormhole to find a new home for humanity. As the team ventures into uncharted galaxies, they face challenges that test their survival and uncover the profound bond between love, time, and space.',
      posterUrl: 'https://th.bing.com/th?id=OIP.8A707ygGKj_-MsgM-gOchgHaKe&w=210&h=297&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
      coverImageUrl:'https://wallpapercave.com/wp/wp1818033.jpg',
      nation: "USA",
      movieUrl: 'inception.mp4'
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
      synopsis: 'On the lush alien world of Pandora, paraplegic Marine Jake Sully is sent to infiltrate the native Na’vi by using a genetically engineered avatar. As he learns their ways and bonds with Neytiri, a Na’vi warrior, Jake must choose between his loyalty to humanity’s mission and his newfound love for Pandora and its people.',
      posterUrl: 'https://th.bing.com/th?id=OIP.NqFYgMiuHbc_byT2CPCHAgHaJ8&w=215&h=289&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
      coverImageUrl:'http://getwallpapers.com/wallpaper/full/c/c/8/96834.jpg',
      nation: "USA",
      movieUrl: 'inception.mp4'
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
      synopsis: 'A groundbreaking theme park featuring living dinosaurs becomes a nightmare when the creatures escape their enclosures. As chaos unfolds, a group of visitors and scientists must survive the prehistoric predators and find a way off the island before it’s too late.',
      posterUrl: 'https://th.bing.com/th?id=OIP.qFd8vzvz5DFKs8jFJwI4uAHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
      coverImageUrl:'https://wallpapers.com/images/featured/jurassic-park-pictures-ftkhwejbc5yooyrr.jpg',
      nation: "USA",
      movieUrl: 'inception.mp4'
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
      synopsis: 'A ragtag group of misfits—Peter Quill, Gamora, Rocket, Groot, and Drax—band together to stop a powerful villain from using a deadly orb to wreak havoc on the universe. Along the way, they discover the value of friendship and what it truly means to be heroes.',
      posterUrl: 'https://th.bing.com/th?id=OIP.pYZChZzBUT3q4EBoDXFA-QHaK-&w=205&h=304&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
      coverImageUrl:'https://wallpaperaccess.com/full/37946.jpg',
      nation: "French",
      movieUrl: 'inception.mp4'
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
      synopsis: 'After the tragic death of his father, young lion Simba flees his kingdom, feeling unworthy of the throne. With the help of new friends, Timon and Pumbaa, Simba learns valuable life lessons and eventually returns to confront his past, reclaim his rightful place as king, and restore peace to the Pride Lands.',
      posterUrl: 'https://th.bing.com/th?id=OIP.9yxvUHiTWP-sEgbvczFKYQAAAA&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
      coverImageUrl:'https://th.bing.com/th/id/OIP.TTv8CuEbxJz67Lnyhh5sOAHaDt?w=293&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      nation: "Viet Nam",
      movieUrl: 'inception.mp4'
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

  //get movie by id
  getMovieById(id: number): Movie | null {
    const movie = this.movieList.find((movie) => movie.id === id);
    return movie || null;  // Return null if no movie is found
  }
}
