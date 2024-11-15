import { Component } from '@angular/core';
import { DataService } from '../data.service';
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
  isLoggedIn: boolean = false;

  faMagnifyingGlass = faMagnifyingGlass;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.isLoggedIn$.subscribe(
      (state) => (this.isLoggedIn = state)
    );
  }
  
  toggleLogin() {
    this.dataService.setLoginState(!this.isLoggedIn);
  }
}
