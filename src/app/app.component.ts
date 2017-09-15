import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // tslint:disable-next-line:no-inferrable-types
  message: string = 'Hello!!';

  users: User[] = [
    { id: 25, name: 'Vagios', username: 'iamninja' },
    { id: 26, name: 'Serspan', username: 'iwasninja' },
    { id: 27, name: 'LeHam', username: 'lexamlexam' }
  ];

  activeUser: User;

  selectUser(user: User) {
    this.activeUser = user;
    console.log(this.activeUser);
  }
}
