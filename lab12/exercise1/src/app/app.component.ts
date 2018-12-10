import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab12 Exercise 1';

  ComponentCounterValue=5;

  detectCounterChange(value){
    this.ComponentCounterValue = value;
  }
}
