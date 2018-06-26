import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-start',
    templateUrl: './start.component.html',
    styleUrls: ['./start.component.css'],
    styles: [`
        h3{
            text-decoration: underline;
        }
    `],
    /*
    Emulated: My Style + Boostrap. No one can use this (default)
    Native: Style applicable for this component only
    None: style pushed to Head Section entire DOM has it
    */
    encapsulation: ViewEncapsulation.Emulated

})
export class StartComponent implements OnInit {
    private time: any;
    private name = 'Swastik';
    private buttonStatus = false;
    private titleStyle = 'red';

    constructor() {
        window.setInterval(() => {
            this.time = new Date().toString();
        });
    }

    Save(xxx: any){
        console.log(xxx.value);
        alert('Button Click kiya');
        this.buttonStatus = true;
    }
    ngOnInit() {

    }
}