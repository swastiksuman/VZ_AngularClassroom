import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { StartComponent } from './start/start.component';
import { GreetComponent } from './greet/greet.comonent';
import { InvoiceComponent } from './greet/invoice/invoice.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    StartComponent,
    GreetComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
