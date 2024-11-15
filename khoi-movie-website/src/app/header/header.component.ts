import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isLoggedIn: boolean = false;

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
