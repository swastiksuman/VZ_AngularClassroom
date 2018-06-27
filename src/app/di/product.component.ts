import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product.model';

@Component({
    selector: 'app-di',
    providers: [ ProductService ],
    templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit{
    product: Product;
    ps: ProductService;

    constructor(ps: ProductService) {
        console.log('Service Injected');
        this.ps = ps;
     }

    ngOnInit() {
        this.product = this.ps.getProduct();
    }

}

/*
    Component Level DI
        Only for that component can use this service
    Model Level DI
        Declared in Module Level. Shared across all components of the module.
    Global Level DI
        Declared at App Module. Hence Global
*/
