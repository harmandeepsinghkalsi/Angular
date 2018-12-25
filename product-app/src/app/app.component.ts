import { Component, OnInit } from '@angular/core';


@Component({
    //meta-data
    selector: 'app-root', // html tag <app-root></app-root>

    //view
    templateUrl: 'app.component.html',

    //scopped styles,only for app component
    styleUrls: ['app.component.css'
    ]
})

export class AppComponent implements OnInit {
    //models , can be accessed from view 

    title: string = "Product App";
    //today: string = new Date().getDate() + "-" + new Date().getUTCDate() + "-" + new Date().getFullYear();

    // view not loaded yet
    constructor() {
        console.log('App Component is created');
    }

    ngOnInit() {

        console.log('App View loaded')

    }

    //handler for subscribe

    onContact(n: number) {
        alert(n);
    }

}



