import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators'

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  // the name "form" below is used at top of the html
  form = new FormGroup({
    account: new FormGroup({
    /* when adding this line above encapsulating the things below,
       the html file needs "<div formGroupName="account">"
       to encapsulate those same things there */
        username: new FormControl('', [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(30),
          UsernameValidators.cannotContainSpace
        ], UsernameValidators.shouldBeUnique
        ),
        // NOTE ABOVE, last one is an "async function" so needs to be outside of rest of array
        // hover over "FormControl() just above to see"
        password: new FormControl('', Validators.required)
        //  can also use hyphenated names, but they need to be in single quotes ''
        // 'user-name': new FormControl(),
    })
  });

  get username() {
    return this.form.get('account.username');
  }

  login() {
    this.form.setErrors({
      invalidLogin: true
    });
    // code below works with an authentication service
    /*
    let isValid = authService.login(this.form.value);
    if (!isValid) {
       this.form.setErrors({
         invalidLogin: true
         }) */
  }
}
