import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'jmsapp-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {
  @ViewChild('positionItem', {read: ViewContainerRef}) positionItemRef: ViewContainerRef;

  constructor() { }

  ngOnInit() {
  }

}
