import { Component, OnInit } from '@angular/core';
import{DataService} from './../../shared/services/data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //amount : number;

  amount$:Observable<number>;

  constructor(private dataService :DataService) {
    console.log("Header created")
  this.amount$ = dataService.amount$;


    //this.amount = dataService.amount; //any error in constructor can crash the application , but do something in ngInit
   }

  ngOnInit() {
    // this.dataService
    //   .amount$
    //   .subscribe(n =>{
    //       console.log("Amount Subscribed :", n);
    //       this.amount=n;
    //   })

  }

}
