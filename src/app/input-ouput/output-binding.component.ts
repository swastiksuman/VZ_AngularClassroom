import { Component, EventEmitter, Output, Input } from '@angular/core';

export interface IPriceQuote{

    stockSymbol: string;
    lastPrice: number;
}

@Component({
    selector: 'price-quoter',
    template: `<h3 class="well text-danger">
                Child PriceQuoterComponent:
                      {{stockSymbol}} 
                      {{price | currency:'USD':'1.2' }}
               </h3>
               <input type="text" [(ngModel)] = "stockSymbol">
               <button class="btn-primary" (click)="forceEmitEvent()">Force Event</button>
               `
})
export class PriceQuoterComponent{
    @Output()
    lastPriceEvent: EventEmitter<IPriceQuote> = new EventEmitter();
    stockSymbol = 'Verizon';
    price: number;

    constructor(){
        window.setInterval(() => {
            let priceQuote: IPriceQuote = {
                stockSymbol: this.stockSymbol,
                lastPrice: 100 + Math.random()
            };
            this.price = priceQuote.lastPrice;
            this.lastPriceEvent.emit(priceQuote);
        }, 50000);
    }

    forceEmitEvent(){
        const priceQuote: IPriceQuote = {
            stockSymbol: this.stockSymbol,
            lastPrice: this.price
        };
        this.lastPriceEvent.emit(priceQuote);
    }
}


// parent component
/*
    price-quoter gives an Output Event lastPriceEvent, handled by PriceQuoteHandler
    app-mail give an Input event to app-mail with the key 'info'
*/
@Component({
    selector: 'app-event',
    template: `
    <div class='container'>
        <h1 class='text-success'>
        Parent Component received: 
        {{stockSymbol}} - {{price | currency:'USD':'1.2'}}
        </h1>
   <price-quoter (lastPriceEvent)="priceQuoteHandler($event)">
       </price-quoter>

    <app-mail  [info]="stockInfo"></app-mail> 
    </div>
    `
})
export class OutputComponent {
    stockSymbol: string;
    price: number;
    stockInfo: IPriceQuote = {'stockSymbol': '', 'lastPrice': 0};

    priceQuoteHandler(event: IPriceQuote){
        this.stockSymbol = event.stockSymbol;
        this.price = event.lastPrice;
        this.stockInfo ={'stockSymbol': event.stockSymbol, 'lastPrice': event.lastPrice};
    }
}

@Component({
    selector: 'app-mail',
    template: `
    <div class='container'>
        <h3 class='text-primary'>
            Sent mail about {{info.stockSymbol}}
            and Stock value    {{info.lastPrice | currency:'USD':'1.2'}}  successfully.
        </h3>
    </div>
    `
})
export class MailComponent{
    @Input()
    info: IPriceQuote;
}

