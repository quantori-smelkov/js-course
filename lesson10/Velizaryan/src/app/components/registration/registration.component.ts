import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {checkPassword} from '../../validators/check-password';
import {CompanyTypes} from './enums';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  CompanyTypes = CompanyTypes;
  form: FormGroup = new FormGroup(
    {
      account: new FormGroup({
        email: new FormControl('', [Validators.email, Validators.required]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl(''),
      }),
      profile: new FormGroup({
        name: new FormControl('', ),
        phone: new FormControl('', Validators.required),
        city: new FormControl(''),
      }),
      company: new FormGroup({
        name: new FormControl('', ),
        ownership: new FormControl('', ),
        TIN: new FormControl('', [Validators.required, Validators.minLength(9)]),
        checkpoint: new FormControl('', [Validators.required, Validators.minLength(9)]),
        OKPO: new FormControl('', [Validators.required, Validators.minLength(8)]),
        date: new FormControl(''),
      }),
      contacts: new FormArray([])
    },
    {validators: [checkPassword] });

  addContacts(): void {
    (this.form.get('contacts') as FormArray).push(
      new FormGroup({
        name: new FormControl(''),
        title: new FormControl(''),
        phone: new FormControl('', Validators.required),
      })
    );
  }

  getControls(): AbstractControl[] {
    return (this.form.get('contacts') as FormArray).controls;
  }
  submit(): void{
    if (this.form.invalid) {
      Object.keys(this.form.controls).forEach(
        (control: string) => this.form.controls[control].markAllAsTouched()
      );

      return;
    }
    console.log(this.form.value);
  }
}
