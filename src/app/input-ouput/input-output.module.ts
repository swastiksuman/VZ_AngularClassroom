import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockComponent, OrderComponent, SMSComponent, TimerComponent } from './input-binding.component';
import { FormsModule } from '@angular/forms';

import { PriceQuoterComponent, OutputComponent, MailComponent} from './output-binding.component';
@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [
        StockComponent,
        OrderComponent,
        SMSComponent,
        TimerComponent, PriceQuoterComponent, OutputComponent, MailComponent
    ],
    exports: [StockComponent, OutputComponent]
})
export class IOModule{

}