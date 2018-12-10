import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercise1';

  counter = 0;
  ComponentCounterValue=5;

  detectCounterChange(value){
    this.counter = value;
  }
}
