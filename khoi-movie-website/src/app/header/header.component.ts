import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  //font awesome icons
  faMagnifyingGlass = faMagnifyingGlass;

  isLoggedIn: boolean = false;
  isShowingLoginForm: boolean = false;

  constructor(private dataService: DataService) {}

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
}
