import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  message = 'Hello!!';

  users = [
    { id: 25, name: 'Vagios', username: 'iamninja' },
    { id: 26, name: 'Serspan', username: 'iwasninja' },
    { id: 27, name: 'LeHam', username: 'lexamlexam' }
  ];

  activeUser;

  selectUser(user) {
    this.activeUser = user;
    console.log(this.activeUser);
  }
}
