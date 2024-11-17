import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { DataService } from './service/data.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginFormComponent } from './login-form/login-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            CommonModule,
            HeaderComponent,
            LoginPageComponent,
            MainPageComponent,
            FontAwesomeModule,
            LoginFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  isLoggedIn: boolean = false;
  isShowingLoginForm: boolean = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.isLoggedIn$.subscribe(
      (state) => (this.isLoggedIn = state)
    );

    this.dataService.isShowingLoginForm$.subscribe(
      (state) =>(this.isShowingLoginForm = state)
    )
  }
  

}
