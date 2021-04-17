import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'notavailable'})
export class NotAvailablePipe implements PipeTransform {
  transform(content: string): string {
    return content == '' ? 'N/A':content ;
  }
}
