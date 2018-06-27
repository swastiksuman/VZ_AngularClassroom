import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';

@Component({
    selector: 'app-multcomp',
    providers: [ContactService],
    templateUrl: './contactlist.component.html'
  })

export class ContactListComponent implements OnInit {
    public contacts: Contact[];
    public selected: any = {};
    status = true;
    errorInfo: string;

    constructor(private _contactService: ContactService) {
        console.log('Service Injected');
    }
    ngOnInit() {
        console.log('ngOnInit Fired and contacts injected');
        this.getContactDetails();
    }

    getContactDetails() {
       this._contactService.getContacts()
         .then(
             (result:Contact[]) => {this.contacts = result}),
             (error) =>{ this.status=false;  }
    }
    selectedContact(contact: Contact) {
    console.log("selected contact name " + contact.name)
        this.selected = contact       
    }
}//end of code
