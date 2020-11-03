import { Component, ElementRef, HostBinding } from '@angular/core';
import { NgForm } from '@angular/forms';
// import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isDarkTheme =  true;
  firstName = '';
  lastName = '';
  emailAddress = '';
  ngOnInit(): void {
    this.isDarkTheme = localStorage.getItem('theme') === 'dark' ? true : false;
  }
  // tslint:disable-next-line: typedef
  storeThemeSelection(){
    localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'Light');
  }

  // tslint:disable-next-line: typedef
  onSubmit(form: NgForm){
    console.log(form);
  }
}
