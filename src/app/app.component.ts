import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './user1.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/*
export class AppComponent {
  users = [
    { firstname: 'Eren', lastname: 'Aslan', age: 21 },
    { firstname: 'Jane', lastname: 'Doe', age: 31 },
    { firstname: 'Bob', lastname: 'Smith', age: 30 },
    { firstname: 'Charlie', lastname: 'Brown', age: 19 },
    { firstname: 'Carl', lastname: 'Sins', age: 15 }

  ];
}

<div *ngFor="let user of users">
  <div *ngIf="user.age > 20">
    <p>Name: {{ user.firstname }} {{ user.lastname }}</p>
    <p>Age: {{ user.age }}</p>
    <hr>
  </div>
</div>

*/


/*
export class AppComponent {
  parentUsers: ParentUser[] = [
    {
      Id: 1,
      Firstname: 'John',
      Lastname: 'Doe',
      DateOfBirth: new Date('1990-01-01'),
      PhoneNumber: '123-456-7890',
      Email: 'john@example.com'
    },
    {
      Id: 2,
      Firstname: 'Eren',
      Lastname: 'Aslan',
      DateOfBirth: new Date('2004-08-24'),
      PhoneNumber: '123-456-7890',
      Email: 'eren@example.com'
    },
    {
      Id: 3,
      Firstname: 'Bob',
      Lastname: 'Smith',
      DateOfBirth: new Date('1993-01-15'),
      PhoneNumber: '123-456-7890',
      Email: 'bob@example.com'
    },
    {
      Id: 4,
      Firstname: 'Charlie',
      Lastname: 'Brown',
      DateOfBirth: new Date('2004-12-31'),
      PhoneNumber: '123-456-7890',
      Email: 'charlie@example.com'
    },
    {
      Id: 5,
      Firstname: 'Carl',
      Lastname: 'Sins',
      DateOfBirth: new Date('2008-12-04'),
      PhoneNumber: '123-456-7890',
      Email: 'carl@example.com'
    }

  ];

} 

<div>
  <app-user [users]="parentUsers"></app-user>
</div>

<div>
  <app-user [childUsers]="parentUsers" (dataFromChild)="handleDataFromChild($event)"></app-user>
</div>

*/

export class AppComponent implements OnInit {
  user1Form: FormGroup;
  users: User[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.user1Form = this.fb.group({
      Id: [null],
      Firstname: ['', [Validators.required, Validators.minLength(3)]],
      Lastname: ['', [Validators.required, Validators.minLength(3)]],
      DateOfBirth: [null, Validators.required],
      PhoneNumber: ['', [Validators.required, Validators.minLength(9)]],
      Email: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  addUser() {
    if (this.user1Form.valid) {
      this.users.push(this.user1Form.value);
      this.user1Form.reset();
    }
  }
}