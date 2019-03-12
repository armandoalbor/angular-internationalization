import { Component } from '@angular/core';

const NO_ALLOTMENT = "NoAllotment";
const MAX_CAPACITY = "Max Capacity";
const MAX_ADULTS = "Max Adults Capacity";
const MAX_KIDS = "Max Kids Capacity";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  phone: string;
  message: string;
  noAllotment: boolean;

  constructor(){
    this.phone = "01 (800) 570-0988";
    this.message = NO_ALLOTMENT;
    this.noAllotment = this.message === NO_ALLOTMENT;
  }
}
