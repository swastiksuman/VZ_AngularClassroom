import { NgModule } from '@angular/core';
import { NgModel, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';

@NgModule({
    imports: [FormsModule, CommonModule],
    declarations: [ProductComponent],
    exports: [ProductComponent]
})
export class DIModule{}