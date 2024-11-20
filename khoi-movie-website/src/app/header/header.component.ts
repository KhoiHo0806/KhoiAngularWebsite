import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Movie } from '../model/movie';
import { SearchAndFilterService } from '../service/search-and-filter.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  //font awesome icons
  faMagnifyingGlass = faMagnifyingGlass;

  isLoggedIn: boolean = false;
  isShowingLoginForm: boolean = false;
  searchString:string = '';
  searchMovieList: Movie[] | null = null;

  constructor(private dataService: DataService, private searchAndFilterService: SearchAndFilterService) {}

  ngOnInit() {
    this.dataService.isLoggedIn$.subscribe(
      (state) => (this.isLoggedIn = state)
    );
    this.dataService.isShowingLoginForm$.subscribe(
      (state) => (this.isShowingLoginForm = state)
    );
  }

  showLoginForm(){
    this.dataService.setIsShowingLoginForm(true)
  }

  logout():void{
    this.dataService.setLoginState(false)
    alert("You logged out!")
  }

  searchMovie(){
    this.searchMovieList = this.searchAndFilterService.searchMovie(this.searchString)
    console.log(this.searchMovieList)
  }

  clearSearch(){
    this.searchString = ""
  }

}
