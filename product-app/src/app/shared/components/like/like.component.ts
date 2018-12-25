import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  // [(likes)] = ""

  @Input()

  likes: number;


  //output == > Input + "change"
  constructor() { }

  ngOnInit() {
  }

  @Output()
  likesChange: EventEmitter<number> = new EventEmitter();


  increment() {

    this.likesChange.emit(this.likes + 1);

  }

  decrement() {
    this.likesChange.emit(this.likes - 1);
  }

}


