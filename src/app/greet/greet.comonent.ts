import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-greet',
    templateUrl: './greet.component.html',
    styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {

    private title: string;

    constructor() {
        console.log('In Greet Component');
        this.title = 'Welcome to Ang';
    }

    ngOnInit() {
    }
}
