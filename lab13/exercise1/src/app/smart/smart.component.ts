import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.css']
})
export class SmartComponent implements OnInit {

  @Input('data') valueArray: string[];

  constructor() { }

  ngOnInit() {
  }

}
