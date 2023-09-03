import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appFilter',
})
export class AppFilterPipe implements PipeTransform {
  transform(value: string, numbersToHide: number): unknown {
    if (!value) {
      return '';
    }
    const maskedPart = '*'.repeat(numbersToHide);
    return value.substring(0, value.length - numbersToHide) + maskedPart;
  }
}
