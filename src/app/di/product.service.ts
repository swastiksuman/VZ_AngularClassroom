import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable()
export class ProductService{

    getProduct(): Product{
        return new Product(101, 'iPhone8', 1249.99, 'The latest iPhone, 9-inch screen');
    }
}
