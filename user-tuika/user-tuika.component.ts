import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormControl, FormBuilder, ReactiveFormsModule, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { map, filter, catchError, tap, startWith, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Observable, Subscription, Subject, asapScheduler, pipe, of , from, interval, merge, fromEvent } from 'rxjs';

import { AppService } from '../app.service';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import { DatePipe } from '@angular/common';
import { UserTuikaService } from './user-tuika.service';





import { stringify } from 'querystring';
import * as moment from 'moment';



@Component({
  selector: 'app-user-tuika',
  templateUrl: './user-tuika.component.html',
  styleUrls: ['./user-tuika.component.scss']
})
export class UserTuikaComponent implements OnInit {
    @Input() dataFromParent: String = '';

  constructor(
     private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private usser: UserTuikaService,
    private ase: AppService
   

    ) { }

  today=moment().format();//現在時刻の取得

  meisai = [];
  p=1;

  ngOnInit(): void {

    this.usser.koment_miru().subscribe(koment_miru => {
      console.log('koment_miru', koment_miru);
      this.meisai = koment_miru;
      console.log('koment_miru_kakunin', this.meisai);
      
      let dd: any = this.meisai;
      console.log('dd', dd);
  
      let meisai_Result = dd.filter(dd => dd['jyusinsya_id'] == this.ase.user['ID']);
      this.meisai = meisai_Result;
  
  
      console.log('meisai_fil', this.meisai);
  


    })
  



  }


}

