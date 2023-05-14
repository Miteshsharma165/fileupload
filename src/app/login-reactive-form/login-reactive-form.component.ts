import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-reactive-form',
  templateUrl: './login-reactive-form.component.html',
  styleUrls: ['./login-reactive-form.component.css']
})
export class LoginReactiveFormComponent implements OnInit {
 
get guest(){
  return this.loginForm.get('partyDetails')  as FormArray
}

 loginForm!:FormGroup
 constructor(private fb:FormBuilder){}
 ngOnInit(): void {
  this.loginForm= this.fb.group({
    'userNameControl': new FormControl('Default value',Validators.compose([Validators.email])),
    'passWordControl': new FormControl('Default value',[Validators.required]),
    'remmeberMeControle': new FormControl('checked',[Validators.required]),
    'loginTimeControle': new FormControl('2023-06-01',[Validators.required]),
    'fileSelectControl': new FormControl('' ,[Validators.required]),
    'monthControl': new FormControl('2023-04' ,[Validators.required]),
    'addressGroup':this.fb.group({
      'addressLine1Controle': new FormControl('Address Line 1',[Validators.required]),
      'addressLine2Controle': new FormControl('Address Line 2',[Validators.required]),
      'postalControle': new FormControl('post',[Validators.required]),
      'stateControle': new FormControl('state',[Validators.required]),
      'countryControle': new FormControl('country',[Validators.required]),
    }),
    'partyDetails':this.fb.array([
      this.fb.group({
        guestName:new FormControl('Gueest Name'),
        age:new FormControl('10')

    })])

   });   
  };

addGuest(){
  const guest2 =this.loginForm.get('partyDetails')  as FormArray;
  guest2.push(this.fb.group({
    guestName:new FormControl('Gueest Name'),
    age:new FormControl('10')

  }));
  // this.guest.push(
  //   this.fb.group({
  //     guestName:new FormControl('Gueest Name'),
  //     age:new FormControl('10')

  // })
  // );
}

}
