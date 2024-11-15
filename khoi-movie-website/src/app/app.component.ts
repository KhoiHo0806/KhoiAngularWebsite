import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { DataService } from './data.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            HeaderComponent,
            LoginPageComponent,
            MainPageComponent,
            FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  isLoggedIn: boolean = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.isLoggedIn$.subscribe(
      (state) => (this.isLoggedIn = state)
    );
  }
  

}
