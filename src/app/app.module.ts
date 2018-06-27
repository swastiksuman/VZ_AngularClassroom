import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';

import { GreetComponent } from './greet/greet.comonent';
import { InvoiceComponent } from './greet/invoice/invoice.component';
import { BindingComponent } from './binding/binding.component';
import { NestedComponent } from './binding/Nested/new.component';
import { StartComponent } from './binding/start/start.component';
import { IOModule } from './input-ouput/input-output.module';
import { ViewChildParentComponent } from './view-child/view-child.parent.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { DIModule } from './di/di.module';
import { ChildComponent, CompLifecycleComponent } from './comp-lifecycle/comp-lifecycle.component';
import { Service } from './dynamic/service-loader';
import { DynamicComponent } from './dynamic/dynamic.component';
import { ContactModule } from './multi-component/services/contact.module';
import { ContactListComponent } from './multi-component/services/contact-layer/contactlist.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    StartComponent,
    GreetComponent,
    InvoiceComponent,
    BindingComponent,
    NestedComponent,
    StartComponent,
    ViewChildParentComponent,
    ViewChildComponent,
    ChildComponent,
    CompLifecycleComponent,
    DynamicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IOModule,
    DIModule,
    ContactModule
  ],
  providers: [Service],
  bootstrap: [AppComponent],
  /* Declare Component for dynamic entry here*/
  entryComponents: [DynamicComponent]
})
export class AppModule { }
