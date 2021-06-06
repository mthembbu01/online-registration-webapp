import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent{
  @Output() selectedOptionRest  = new EventEmitter<string>();

  onSelect(passwordReset: string): void {
    /**
     * @ToDo add reset call
     */

    if (passwordReset === 'reset'){
      this.selectedOptionRest.emit('loggedIn');
    }
    else {
      this.selectedOptionRest.emit(passwordReset);
    }
  }
}
