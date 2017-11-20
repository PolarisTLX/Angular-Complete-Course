import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  log(x) { console.log(x); }

/* below, (f) is from contact-form.component.html:
   <form #f="ngForm"... */

  submit(f) {
    //console.log(f);
    //console.log(f.invalid);
    // console.log(f.value);
    console.log(f.value.firstName);
    console.log(f.value.newPassword);
    //f.valid;
    //f.invalid;
    //f.value;
    //f.value.firstName;   //etc...
  }

}
