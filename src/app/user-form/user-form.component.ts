import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { User } from '../shared/models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Output() userCreated = new EventEmitter();
  newUser: User = new User();
  active: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.userCreated.emit({ user: this.newUser });

    this.newUser = new User();
    // Workaround to reset the form after submit
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}
