import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  isShowingLoginForm:boolean = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.isShowingLoginForm$.subscribe(
      (state) => (this.isShowingLoginForm = state)
    );
  }

  showLoginForm(){
    this.dataService.setIsShowingLoginForm(true)
  }
}
