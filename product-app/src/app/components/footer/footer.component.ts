import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import{DataService} from './../../shared/services/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  total :number=0;

  @Input("x-company") // binding alias name to consider the company specific needs.
  company:string;

  @Input()
  date:Date

  //output/Event binding :() is used for event binding 

  @Output()
  contactEvent : EventEmitter<number> = new EventEmitter();

  constructor(private dataService:DataService) { }

  ngOnInit() {

    this.dataService
      .total$
      .subscribe(n =>{
          console.log("Total Subscribed :", n);
          this.total=n;
  })
      
  }

  contact(){
    //Publish from child
    this.contactEvent.emit(Math.random());
  }
}
