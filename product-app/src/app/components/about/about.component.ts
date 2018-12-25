import { Component, OnInit , ViewChild, ElementRef } from '@angular/core';
import { HighlightDirective } from '../../shared/directives/highlight.directive';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  members : string[]=['Jimmy','Harman','Arun','Pradeep','Robin'];

  show:boolean = true;

  aboutLikes:number=100;

  isMoverHover:boolean; 

  @ViewChild("memberName")
  inputElement: ElementRef;

  @ViewChild("p1")
  p1Element: ElementRef;

  @ViewChild("highlight1")
  highlight: HighlightDirective;

  empty(){
    this.members=[];
  }

  addMember(name:string){
    this.members.push(name);
  }

  constructor() { }

  ngOnInit() {

    this.p1Element.nativeElement.textContent = 'from TS';
    this.inputElement.nativeElement.focus();

    console.log("Dir",this.highlight.color);
    this.highlight.setColor('blue');
  }

}
