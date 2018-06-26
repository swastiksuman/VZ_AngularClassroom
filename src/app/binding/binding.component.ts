import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-binding',
    templateUrl: './binding.component.html',
    styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
    private title: string = 'Binding Example';
    private clicked: boolean = true;
    private items: any = [
        {name: 'Kendo UI'},
        {name: 'Ext JS'},
        {name: 'Angular JS'}
    ];

    public clickedItem: any = {name: ''};

    public onClickEvent(item: any){
        console.log("____________");
        this.clickedItem = item;
        this.clicked = !this.clicked;
        console.log(this.clicked);
        console.log(this.clickedItem);
    }

    constructor() { }
    example(){
        console.log("adsasd");
    }
    ngOnInit() {

    }

}