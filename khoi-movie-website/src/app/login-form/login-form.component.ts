import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule],
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
    console.log("username:"+this.userName)
    console.log("pwd:"+this.password)
    if(isRealUser){
      this.dataService.setLoginState(true)
      alert("Login successfully")
    }else{
      alert("Wrong user name of password!")
    }
    
  }


}
