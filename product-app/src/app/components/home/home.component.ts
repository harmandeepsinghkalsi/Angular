import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  counter:number=0;

  homeLikes:number=100;

  title : string = "Home"; // even if we remove string , type script will understand that it is of type string
  price = 99.99;
  today : Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  increment(){
    this.counter++;
  }

  decrement(){
    this.counter--;
  }

}
