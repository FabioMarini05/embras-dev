import { Component, EventEmitter, Output } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  user = { name: '', email: '' };
  @Output() formClosed = new EventEmitter<void>();

  constructor(private userService: UserService) { }

  onSubmit() {
    this.userService.addUser(this.user).subscribe(() => {
      this.formClosed.emit();
    });
  }

  closeForm() {
    this.formClosed.emit();
  }
}
