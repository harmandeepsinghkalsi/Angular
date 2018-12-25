import { Injectable } from '@angular/core';
import {CartItem} from '../models/cart-item';
import {Subject} from 'rxjs/Subject';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';

//Business Logic
// Data Sharing with components

@Injectable()
export class DataService {

  //amount$ : Subject<number> = new Subject();

  amount$ : BehaviorSubject<number> ;
  amount : number =0;

  total$ : Subject<number> = new Subject();

  
  total: number =0;
  items: CartItem[]=[];
  constructor() {

    console.log('Data Service loaded');
    this.amount$ = new BehaviorSubject(this.amount);
   }

  addItem(item:CartItem){
    this.items.push(item);
    this.total += item.qty;
    this.amount+=item.qty*item.price;

    console.log("Amount: ",this.amount);

    //publish the amount

    this.amount$.next(this.amount);

    this.total$.next(this.total);

  }

  emptyCart(){
    this.items=[];
    this.total =0;
    this.amount=0;

    //publish the amount

    this.amount$.next(this.amount);
    this.total$.next(this.total);

  }

  

}
