import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  isShowingLoginForm:boolean = false;
  loginState:boolean = false;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.dataService.isShowingLoginForm$.subscribe(
      (state) => (this.isShowingLoginForm = state)
    );
    this.loginState = this.dataService.getLoginState()
  }

  showLoginForm(){
    this.dataService.setIsShowingLoginForm(true)
  }

  handleLogin(){
    if(this.loginState){
      this.router.navigate(['/main-page'])
    }
    else{
      this.showLoginForm()
    }
  }
}
