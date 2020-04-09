import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student-dashboard';
  calendarOn: boolean = true;
  profileOn: boolean = false;
  weekOn: boolean = false;

  showCalendar() {
    this.calendarOn = true;
    this.profileOn = false;
    this.weekOn = false;
  }

  showProfile() {
    this.calendarOn = false;
    this.profileOn = true;
    this.weekOn = false;
  }

  showWeek() {
    this.calendarOn = false;
    this.profileOn = false;
    this.weekOn = true;
  }
}
