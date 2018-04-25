import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'jmsapp-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  suggestions: string[];
  constructor() { }

  ngOnInit() {
    this.suggestions = [ "archie" ,  "jake" ,  "richard" ];
  }

}
