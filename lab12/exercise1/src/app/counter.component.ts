import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>
      Counter Component!
    </p>
    <button (click)="decrement()">-</button>
        {{ counterValue }}
    <button (click)="increment()">+</button>

    <h3>Counter Input: {{ counter }} </h3>
  `,
  styles: []
})
export class CounterComponent implements OnInit {

  @Input() counter;
  @Output() counterChange;
  counterValue = 0;
  constructor() { 
    this.counterChange = new EventEmitter();
  }

  ngOnInit() {
    this.counterValue = this.counter;
  }

  decrement(){
    this.counterValue--;
    this.counterChange.emit(this.counterValue);
  }

  increment(){
    this.counterValue++;
    this.counterChange.emit(this.counterValue);
  }
}
