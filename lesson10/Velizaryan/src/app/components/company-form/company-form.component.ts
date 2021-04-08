import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit {

  form: FormGroup = new FormGroup({
    userProfile: new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl('')
    }),
    company: new FormGroup({
      name: new FormControl(''),
      address: new FormControl(''),
      id: new FormControl('')
    }),
  });

  constructor() { }

  ngOnInit(): void {
  }

}
