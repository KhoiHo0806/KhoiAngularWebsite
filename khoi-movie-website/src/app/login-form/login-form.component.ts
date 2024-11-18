import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../service/data.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  isShowingLoginForm : boolean = false;
  userName:string ="";
  password:string ="";

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
    let isRealUser = this.dataService.authenUser(this.userName,this.password)
    if(isRealUser){
      this.dataService.setLoginState(true)
      console.log("login state: "+ this.dataService.getLoginState())
      alert("Login successfully")
    }else{
      console.log("login state: "+ this.dataService.getLoginState())
      alert("Wrong user name of password!")
    }
    
  }


}
