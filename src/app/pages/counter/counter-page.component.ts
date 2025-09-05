import {Component, signal} from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html'
})
export class CounterPageComponent {
  num = 15;
  counter = signal(15);

  increaseByNumber(value: number) {
    this.num += value;
    this.counter.update(number => number += value)
  }

  resetValue() {
    this.num = 0;
    this.counter.set(0)
  }

  protected readonly signal = signal;
}
