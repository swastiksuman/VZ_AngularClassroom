import {Component} from '@angular/core'

@Component({
    selector:'app-start',
    templateUrl:'./start.component.html',
    styleUrls: ['./start.component.css']
})
export class StartComponent{
    message:string
    constructor(){
        this.message="I am start component"
    }
}