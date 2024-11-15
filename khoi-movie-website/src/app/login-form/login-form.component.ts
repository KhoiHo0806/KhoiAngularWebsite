import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  isShowingLoginForm : boolean = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.isShowingLoginForm$.subscribe(
      (state) => (this.isShowingLoginForm = state)
    );
  }

  closeLoginForm(){
    this.dataService.setIsShowingLoginForm(false)
  }

  login(){
    this.dataService.setLoginState(true)
  }
}
