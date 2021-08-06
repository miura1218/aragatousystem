import { Component, OnInit } from '@angular/core';
import { OtoiawaseService } from './otoiawase.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


import { AppService } from '../app.service';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormControl, FormBuilder, ReactiveFormsModule, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { map, filter, catchError, tap, startWith, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Observable, Subscription, Subject, asapScheduler, pipe, of , from, interval, merge, fromEvent } from 'rxjs';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'app-otoiawase',
  templateUrl: './otoiawase.component.html',
  styleUrls: ['./otoiawase.component.scss']
})
export class OtoiawaseComponent implements OnInit {

  constructor(
   private fb: FormBuilder,

     private oto: OtoiawaseService,
       private router: Router,

    ) { }
   //    hedForm = this.fb.group({
   // user  :'',
   //  email:'',
   // komento :["",Validators.required],
 

   // });
    toiawaseForm = {
    user:"",
    email:"",
    komento:"",
      }
   
  
  toiawase:any = [];

  ngOnInit(): void {

  }
   touroku(){

    // this.hed_form.controls['akaunt_id'].setValue(this.user_data['akaunt_id']);
    // this.hed_form.controls['name'].setValue(this.user_data['name']);
    // this.hed_form.controls['pass'].setValue(this.user_data['pass']);
    // this.hed_form.controls['tourokubu'].setValue(this.user_data['tourokubu']);
    // this.hed_form.controls['add'].setValue(this.user_data['add']);

      console.log('toiawaseForm', this.toiawaseForm);


    this.oto.toiawase_data(this.toiawaseForm).subscribe(toiawase_data => {

      console.log('toiawase_data', toiawase_data);

      this.toiawase = toiawase_data;
      console.log('toiawase', this.toiawase);

    })

    　　      alert('送信完了しました。');

    // this.router.navigate(['/']);

  };


  
    // console.log('touroku', this.hedForm);//フォーム項目のログの表示
  }

