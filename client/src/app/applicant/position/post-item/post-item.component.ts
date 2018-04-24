import { Component, OnInit, Input } from '@angular/core';
import { JobPosition } from '../../../shared/models/jobPosition';

@Component({
  selector: 'jmsapp-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input() positioninfo: JobPosition;
  constructor() {
   }

  ngOnInit() {
  }

}
