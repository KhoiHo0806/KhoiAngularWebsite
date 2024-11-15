import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private isLoggedInSubject = new BehaviorSubject<boolean>(false); //set log out as default state
  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable(); //set as observable so other component can access

  isShowingLoginFormSubject = new BehaviorSubject<boolean>(false);
  isShowingLoginForm$: Observable<boolean> = this.isShowingLoginFormSubject.asObservable();

  constructor() { }

  //set login state
  setLoginState(isLoggedIn:boolean){
    this.isLoggedInSubject.next(isLoggedIn)
  }
  //get login state
  getLoginState(){
    return this.isLoggedInSubject.getValue()
  }

  //set is showing login form
  setIsShowingLoginForm(isShowingLoginForm:boolean){
    this.isShowingLoginFormSubject.next(isShowingLoginForm);
  }
  //get is showing login form
  getIsShowingLoginForm(){
    return this.isShowingLoginFormSubject.getValue();
  }
}
