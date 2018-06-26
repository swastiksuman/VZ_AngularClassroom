import {Component, ViewChild} from '@angular/core';
import {ViewChildComponent} from './view-child.component';
@Component({
    selector: 'app-viewchild',
    template: `
   <div>
        <h1>Parent Component</h1>
        <button (click)="showHideText()">
            Show/Hide Child Component Text
        </button>

    <div class="container" style="background:yellow">    
        <child-component></child-component>
    </div>

   </div>
    `
})
export class ViewChildParentComponent {

    /*
        creates a object of View Child
    */
    @ViewChild(ViewChildComponent)
    private childComponent: ViewChildComponent;

    showHideText(){
        this.childComponent.toggleVisibility('Parent Component');
    }
    constructor() { }
    ngOnInit() { 
    }
}