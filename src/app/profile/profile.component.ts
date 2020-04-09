import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  email;
  password;
  school;
  error;

  constructor() { }

  ngOnInit(): void {
        // Worked on together by Tim Tyrrell and Sam Yates

    this.email = document.getElementById('email');
    this.password = document.getElementById('password');
    this.school = document.getElementById('school');
    this.error = document.getElementById('error');

    let form = document.getElementById('form');

    // event listener to display error messages from profile form
    form.addEventListener('submit', (e) => {
        let messages = [];

        if(this.email.value === "" || this.email.value == null) {
            messages.push('*email is required\n');
        }
        if(this.password.value.length < 7) {
            messages.push('*password must be longer than 6 characters\n');
        }
        if(this.school.value === "Choose...") {
            messages.push('*please choose a school');
        }
        if(messages.length > 0) {
            e.preventDefault();
            this.error.innerText = messages.join("");
            this.error.style = "display"
        }
    });


  }

}
