import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { ContactDetailsComponent } from './contact-layer/contactdetail.component';
import { ContactListComponent } from './contact-layer/contactlist.component';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [ ContactDetailsComponent, ContactListComponent ],
    //Ensure that the component is exported not bootstrapped
    exports:    [ ContactListComponent ]
})
export class ContactModule { }