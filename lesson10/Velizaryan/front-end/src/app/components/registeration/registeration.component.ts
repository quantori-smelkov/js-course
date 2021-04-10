import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { checkPasswords } from 'src/app/validators/check-passwords';
import { CompanyTypes } from './enums';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import {of} from 'rxjs';


@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})
export class RegisterationComponent {
  success: boolean = null;
  error: string = null;
  text: string = null;

  constructor(
    private httpClient: HttpClient
  ) {}

  CompanyTypes = CompanyTypes;

  form: FormGroup = new FormGroup(
    {
      account: new FormGroup({
       email: new FormControl('', [Validators.email, Validators.required]),
       password: new FormControl('', [Validators.required, Validators.minLength(6)]),
       confirmPassword: new FormControl(''),
      }),
      profile: new FormGroup({
        name: new FormControl(''),
        phone: new FormControl('', Validators.required),
        city: new FormControl(''),
      }),
      company: new FormGroup({
        name: new FormControl(''),
        ownership: new FormControl(''),
        TIN: new FormControl('', [Validators.required, Validators.minLength(9)]),
        checkpoint: new FormControl('', [Validators.required, Validators.minLength(9)]),
        OKPO: new FormControl('', [Validators.required, Validators.minLength(8)]),
        date: new FormControl(''),
      }),
      contacts: new FormArray([])
    },
    {
      validators: [checkPasswords]
    }
  );

  addContact(): void {
   (this.form.get('contacts') as FormArray).push(
      new FormGroup({
        name: new FormControl(''),
        title: new FormControl(''),
        phone: new FormControl('', Validators.required),
      })
    );
  }

  getContactsControls(): AbstractControl[] {
    return (this.form.get('contacts') as FormArray).controls;
  }

  submit(): void {
    this.httpClient
      .get('http://localhost:3001/api/sign-up')
      .pipe(
        tap((c) => console.log(c)),
        catchError((err: HttpErrorResponse) => {
          console.log(err.error);

          this.error = err.error.error;

          return of(err.error);
        })
      )
      .subscribe(result => {
        this.success = true;
        this.text = result;
      });

    // if (this.form.invalid) {
    //   Object.keys(this.form.controls).forEach(
    //     (control: string) => this.form.controls[control].markAllAsTouched()
    //   );
    //
    //   return;
    // }




    console.log(this.form.value);

  }

}
