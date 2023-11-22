import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ParentUser } from '../parent-user';
import { ChildUser } from '../child-user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  
  @Input() parentUsers: ParentUser[] = [];
  @Input() childUsers: ChildUser[] = [];
  @Output() dataFromChild = new EventEmitter<ChildUser[]>();
  
  sendDataToParent() {
    this.dataFromChild.emit(this.childUsers);
  }
}
