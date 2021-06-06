import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../shared/user.model';
import {RegisterService} from './register.service';
import {Subscription} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})

export class RegisterComponent {
  user: User = new User('', '', '', '', '', '');
  @Output() registeredEvt = new EventEmitter();

  constructor(private registerService: RegisterService) {
  }

  public register(user: User): Subscription{
    return this.registerService.addUser(user).subscribe(
      (response: User) => {
        this.user = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onSelect(register: string): void {
    // @ToDO register user
    if (register === 'register'){
      this.registeredEvt.emit('loggedIn');
    }
  }

  onAddUser(registerForm: NgForm): void {
    this.registerService.addUser(registerForm.value).subscribe(
      (response: User) => {
        this.registeredEvt.emit('loggedIn');
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
