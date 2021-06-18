import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'positiveNegativeSymbol',
})
export class PositiveNegativeSymbolPipe implements PipeTransform {
  transform(
    value: number | string | null,
    positive: string = '+',
    negative: string = '-'
  ): string | null {
    if (value === null) {
      return null;
    }

    const num: number = typeof value === 'string' ? parseFloat(value) : value;
    if (num > 0) {
      return `${positive}${value}`;
    }

    if (num < 0) {
      return `${negative}${`${value.toString().replace('-', '')}`}`;
    }

    return `${value}`;
  }
}
