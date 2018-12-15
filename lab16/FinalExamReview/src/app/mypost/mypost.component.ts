import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'mypost',
  templateUrl: './mypost.component.html',
  styleUrls: ['./mypost.component.css']
})
export class MypostComponent implements OnInit{

  @Input() data;

  constructor() { }

  ngOnInit() {

  }
}
