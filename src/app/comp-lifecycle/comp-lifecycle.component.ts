import { Component, Input, OnInit, OnChanges, DoCheck, OnDestroy, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'app-lifecycle',
    template: `
        <h1 class="container">Google Search:
            <input type="text" [(ngModel)]="search">
        </h1>

        <app-child [search]="search"></app-child>
    `
})
/*
    implements is optional but a good practise
*/
export class CompLifecycleComponent implements OnInit, OnChanges, OnDestroy {
    search = 'computers';

    /*
        Data is initialized ngOnInit function. Keep constructor for dependency Injection
    */
    constructor() { 
        console.log('Parent Constructor Called');
    }
    ngOnInit() {
        console.log('Parent OnInit Called');
    }

    ngOnChanges(){

    }

    ngOnDestroy(){}
}


@Component({
    selector: 'app-child',
    template: `
        <h1 class="text-danger container">Search Text</h1>
        <div class="well">
        <h3 class="text=primary">{{ search }}</h3>
    `
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, OnDestroy {

    changed = false;

    @Input()
    search: string;

    //Search not init here
    constructor(public cd: ChangeDetectorRef) {
        console.log(`constructor: ${this.search}`);
        this.cd.detach();
    }

    ngOnInit() {
        console.log(`ngOnInit: ${this.search}`);
        /*setTimeout(() => {
            this.cd.reattach()}, 5000
        );*/
    }

    ngDoCheck(){
        console.log('ng Do Check Change detection strategy');
        /*
        if(this.search.length > 3){
            this.cd.detectChanges();
        }
        */
       //attaches then detaches
       //this.cd.detectChanges();

       //Restrict based on no changes
       this.cd.checkNoChanges();
    }

    //Every time a property changes
    ngOnChanges(){
        console.log(`ngOnChanges: ${this.search}`);
    }

    ngOnDestroy(){
        console.log('Component Destroyed');
    }

}