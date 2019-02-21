import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import 'rxjs/add/operator/filter';
import { Subscription } from 'rxjs/Subscription';
import PerfectScrollbar from 'perfect-scrollbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'app';

  constructor( ) {}

  ngOnInit() {
   
  }
 
}
