import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {

  items = {
    'sun': [],
    'mon': [],
    'tue': [],
    'wed': [],
    'thu': [],
    'fri': [],
    'sat': []
  }


  constructor() { }

  ngOnInit(): void {
  }

  addItem(day, val) {

    // create new node for that value, store it in ordered list pertaining to the correct day
    // correct day determined by 'day' parameter passed in and careful id naming in the document
    let todo = document.createTextNode(val);
    let listitem = document.createElement('li');
    listitem.appendChild(todo);
    document.getElementById(day + "-list").appendChild(listitem);

    let form = document.getElementById('sunform');
    form.removeChild(form.childNodes[0]);
  }

}
