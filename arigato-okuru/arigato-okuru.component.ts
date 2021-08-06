import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormControl, FormBuilder, ReactiveFormsModule, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { map, filter, catchError, tap, startWith, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Observable, Subscription, Subject, asapScheduler, pipe, of , from, interval, merge, fromEvent } from 'rxjs';

import { AppService } from '../app.service';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import { DatePipe } from '@angular/common';
import { ArigatoOkuruService } from './arigato-okuru.service';




import { stringify } from 'querystring';
import * as moment from 'moment';



interface Food {
  value: string;
  viewValue: string;
  bunsyo:string;
  sousin_count:any;
}

// interface Car {
//   value: string;
//   viewValue: string;
// }




@Component({
  selector: 'app-arigato-okuru',
  templateUrl: './arigato-okuru.component.html',
  styleUrls: ['./arigato-okuru.component.scss']
})
export class ArigatoOkuruComponent implements OnInit {

  
  selectedValue: string;
  // selectedCar: string;

  info_a0: string; // 


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private arise: ArigatoOkuruService,
    private ase: AppService

) { }


// foods: Food[] = [
//   {value: '0', viewValue: 'tomokazu' ,bunsyo:'' ,sousin_count:'0',},
//   {value: '1', viewValue: 'hinako' ,bunsyo:'' ,sousin_count:'0',},
//   {value: '2', viewValue: 'mika' ,bunsyo:'' ,sousin_count:'0',} , 
//   {value: '3', viewValue: 'masayuki' ,bunsyo:'' ,sousin_count:'0',},
//   {value: '4', viewValue: 'miyoko' ,bunsyo:'' ,sousin_count:'0',},
//   {value: '6', viewValue: 'kazuo' ,bunsyo:'' ,sousin_count:'0',},

// ];

 hed_form = this.fb.group({

    uketorinin: ["", Validators.required],
    message: ["", Validators.required],
    sousin_bi:"",
    sousin_count:"",
 


  })

   sousin_data = {
    login_user:"",
    uketorinin:"",
    uketorinin_id:"",
    message:"",
    sousin_bi:"",
    sousin_count:"",
    login_user_id:"",
  }

  　  today=moment().format();//現在時刻の取得

  menba = [];
   komento = [];
  


  ngOnInit(): void {
       this.arise.arigatou_user_data().subscribe(arigatou_user_data => {

      console.log('arigatou_user_data', arigatou_user_data);

      this.menba = arigatou_user_data;
      console.log('menba', this.menba);

         let dd :any= arigatou_user_data;
      console.log('dd', dd);

      let menba_Result = dd.filter(dd => dd['user'] != this.ase.user['user']);
      this.menba = menba_Result;
      console.log('menba_f', this.menba);

    })


        this.arise.komento_okuru(this.hed_form.value).subscribe(koment_okuru => {

      console.log('koment_okuru', koment_okuru);

      this.komento = koment_okuru;
      console.log('komento', this.komento);



    })







  }

okuru(i){
console.log('okuru',i);
let c=Number(i['kaisuu'])+1;
console.log('c',c);
i['kaisuu'] =c;

// this.arise.test();

// this.foods[i]['count'] = stringify(c);
      console.log('i', i);




  

  // this.hed_form.controls['login_user'].setValue(this.ase.user['user']);// this.arise.test();
    // this.hed_form.controls['uketorinin'].setValue(i['name']);// this.arise.test();
    // this.hed_form.controls['uketorinin_id'].setValue(i['ID']);// this.arise.test();
    // this.hed_form.controls['message'].setValue(i['komento']);// this.arise.test();
    // this.hed_form.controls['sousin_bi'].setValue(i['tourokubi']);// this.arise.test();
    // this.hed_form.controls['sousin_count'].setValue(i['kaisuu']);// this.arise.test();
    // this.hed_form.controls['login_user_id'].setValue(this.ase.user['ID']);// this.arise.test();

    this.sousin_data['login_user']=(this.ase.user['user']);// this.arise.test();
    this.sousin_data['uketorinin']=(i['name']);// this.arise.test();
    this.sousin_data['uketorinin_id']=(i['ID']);// this.arise.test();
    this.sousin_data['message']=(i['komento']);// this.arise.test();
    this.sousin_data['sousin_bi']=this.today;// this.arise.test();
    this.sousin_data['sousin_count']=(i['kaisuu']);// this.arise.test();
    this.sousin_data['login_user_id']=(this.ase.user['ID']);// this.arise.test();

    // this.foods[i]['count'] = stringify(c);
    // this.ase.komento_okuru(i);
      // console.log('komento_okuru1', this.hed_form);


// 
    // this.foods[i]['count'] = stringify(c);
    // this.ase.komento_okuru(i);
      console.log('komento_okuru2', this.sousin_data);

    // this.arise.komento_okuru(this.hed_form.value);

    this.arise.komento_okuru(this.sousin_data).subscribe(komento_okuru => {
      console.log('komento_okuru', komento_okuru);
      this.komento = komento_okuru;
      console.log('koment3', this.komento);
    })

    alert('送信しました。');


  }



  // meisai=[];




}
