import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../shared/user.model';
import {Person} from '../shared/person.model';
import {RegisterService} from './register.service';
import {Subscription} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  user: User = new User('', '', '', '', '', '');
  person: Person = new Person('','','','');
  @Output() registeredEvt = new EventEmitter();

  constructor(
    private registerService: RegisterService,
    private router:Router,
    private activateRoute:ActivatedRoute
  ) {
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
    // @ToDO register user: I think it should rerout to a dashboard??
    if (register === 'register'){
      console.log('loggedIn Buhle!!');
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
// TODO remove this as soon as we can list the persons!
   onAddPerson(registerForm: NgForm): void {
    // this.registerService.addPerson(registerForm.value).subscribe(
    //   (response: Person) => {
    //     this.registeredEvt.emit('Person registered!');
    //   },
    //   (error: HttpErrorResponse) => {
    //     alert(error.message);
    //   }
    // );

    console.log(registerForm.value, 'registered!');
    
  }
}
