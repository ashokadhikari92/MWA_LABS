import { DataService } from './services/data.service';
import { OnInit, OnChanges } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'FinalExamReview';
  private posts;

  constructor(private service: DataService){
    this.service.getPosts().subscribe((response) => { this.posts =  response; console.log(response,this.posts)});
  }

  ngOnInit(){

  }

  ngOnChanges(){
    console.log(this.posts);
  }

  filter(event){
    let value = event.target.value;
    console.log(value);
  }
}
