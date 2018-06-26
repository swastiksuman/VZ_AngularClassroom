import {Component, Input } from '@angular/core';
//StockComponent
@Component({
    selector: 'app-stock',
    template: `
    <div class="text-left">
    <h1 class="bg-info">Stock Exchange</h1>
    <input type="text"  placeholder="Enter stock (e.g: Verizon)"  
      [(ngModel)]="stock"/>
      <input type="text"  placeholder="Enter quantity"  [(ngModel)] = "quantity">
    <br/>

    <div>Stock Info :{{stock}}</div>

    <order-processor  [stockSymbol]="stock" [quantity]="quantity">
       </order-processor>
</div>

     <timer-comp></timer-comp>
  `
})
//Parent component
export class StockComponent {
    stock: string; = 50;
    constructor(){
        window.setInterval(() =>
        {
            this.stock = "Murthy Infotek @ $"+
                      Math.round(100 * Math.random());
        }, 50000
    );

    }
    // this is event.target.value in  javascript
    onInputEvent({target}: any): void{
        this.stock=target.value;//verizon
        
    }
}


//OrderComponent
@Component({
    selector: 'order-processor',
    template: `
    <h2 class="bg-primary" >Stock Information</h2>
    <h2 class="text-danger container">
        Buying {{quantity}} shares of {{stockSymbol}}
    </h2>
    Company : <input type="text" [(ngModel)]="stockSymbol"/>
    <sms-text [stock]="stockSymbol"></sms-text>
  `
})
export class OrderComponent{
    //quantity and stockSymbol is coming from
    @Input()
    quantity: number;

    @Input()
    stockSymbol: string;
    constructor() { }

}


@Component({
    selector: 'timer-comp',
    template: `
    <h2 style='background-color:black;color:yellow'>
    {{time}}
    </h2>
    `
})
export class TimerComponent {
    time:any;   
    constructor() {
        window.setInterval(() => {
                this.time=new Date().toString();
        },1000);
    }
}


@Component({
    selector: 'sms-text',
    template: `
	<h3 class="bg-success">
	  Stock Information from child SMS component</h3>
	<h2 class="text-success container">
		Sent SMS about {{stock}} 
	</h2>
	`
})
export class SMSComponent{
    @Input()
    stock:string;
}
