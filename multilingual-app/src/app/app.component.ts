import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  role = 'admin';
  usersCount = 2;
  phone = "01 (800) 570-0988";

  NO_ALLOTMENT = "NoAllotment";
  MAX_CAPACITY = "Max Capacity";
  MAX_ADULTS = "Max Adults Capacity";
  MAX_KIDS = "Max Kids Capacity";

  message = "Max Capacity";

  users = [
    {
      gender: 'male',
      name: 'Armando Albor',
      message: 'NoAllotment'
    },
    {
      gender: 'female',
      name: 'Anais Hernandez',
      message: 'Max Capacity'
    },
  ]
}
