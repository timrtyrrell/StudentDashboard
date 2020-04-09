import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  monthTitle: string;
  yearTitle: string;
  current: Date;

  constructor() { }

  ngOnInit(): void {
    this.current = new Date();
    this.display(this.current.getMonth(), this.current.getFullYear());    
  }

  display(month, year) {

    // display title of calendar using current month and year
    this.monthTitle = this.months[month];
    this.yearTitle = year;
    let table = document.getElementById('calendar');
    table.innerHTML = "";

    // logic for sizing the chart depending on the month
    let dayOfWeek = new Date(year, month).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    // start at day 1 and loop through a 6 x 7 array
    let i = 1;
    for(let j = 0; j < 6; j++) {
        let week = document.createElement('tr');
        for(let k = 0; k < 7; k++) {

            // done with month -> break
            if(daysInMonth < i) {
                break;

            // otherwise, make a new box; only create button if day is starts on real day of month
            } else {
                let day = document.createElement('td');
                let dayButton;

                // create empty box for first few days from last month
                if(k < dayOfWeek && j === 0) {
                    dayButton = document.createTextNode("");

                // create new button which lights up when clicked with number pertaining to day of month
                } else {
                    dayButton = document.createElement('button');
                    dayButton.className = "btn btn-dark";
                    dayButton.id = "day-button"
                    dayButton.innerHTML = i;
                    dayButton.addEventListener('click', (e) => {
                        this.switchDay(e.target);
                    });
                    i++;
                }

                // send new items back to document
                day.appendChild(dayButton);
                week.appendChild(day);
            }
        }
        table.appendChild(week);
    }
  }


    // function called when a button is clicked -> clears all other days and turns this day green
  switchDay(btn) {
      let nodelist = document.querySelectorAll('#day-button');
      nodelist.forEach(function(button) {
          button.className = "btn btn-dark";
      })
      //current = new Date(year, month, btn.innerHTML);
      btn.className = "btn btn-success";
  }

  // scroll through months (self explanatory)
  previous() {
      let month = this.current.getMonth();
      let year = this.current.getFullYear();

      if(month === 0) { 
          year--;
          month = 11;
      } else {
          month--;
      }

      this.current = new Date(year, month)
      this.display(month, year);
  }

  // scroll through months (self explanatory)
  next() {
      let month = this.current.getMonth();
      let year = this.current.getFullYear();

      if(month === 11) { 
          year++;
          month = 0;
      } else {
          month++;
      }

      this.current = new Date(year, month)
      this.display(month, year);
  }

}
