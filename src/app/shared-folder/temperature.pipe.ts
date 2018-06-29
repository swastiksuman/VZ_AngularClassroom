import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {
    /* Data Coming from property */
    transform(value:  number, fromTo: string): any {
        if (!fromTo) {
            throw "requires parameter CtoF and FtoC";
        }
        return (fromTo === 'FtoC') ?
            (value - 32) * 5.0 / 9.0 : value * 9.0 / 5.0 + 32;
    }

}
