import { JobPosition } from './../../shared/models/jobPosition';
import { PostItemComponent } from './post-item/post-item.component';
import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, Input, ComponentRef, AfterContentInit, AfterViewInit } from '@angular/core';
import { Applicant } from '../../shared/models/applicant';
import { forEach } from '@angular/router/src/utils/collection';
import { DataService } from '../../core/services/data.service';


@Component({
  selector: 'jmsapp-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {
 // @ViewChild('positionItems', { read: ViewContainerRef }) positionItemRef: ViewContainerRef;
  @Input() positions: JobPosition[];

 // private _componentRef: ComponentRef<{}>[];
 // private _tempComponentRef: ComponentRef<{}>;
  constructor(private _componentFactoryResolver: ComponentFactoryResolver, private _dataService: DataService) {
    
  }

  ngOnInit() {
   // this._componentRef = [];
  }

  // ngAfterViewInit() {
  //   // this.positions.forEach( item => {
  //   //   let factory = this._componentFactoryResolver.resolveComponentFactory(PostItemComponent);
  //   //   this._tempComponentRef = this.positionItemRef.createComponent(factory);
  //   //   this._componentRef.push(this._tempComponentRef);
  //   //   let instance = <PostItemComponent>this._tempComponentRef.instance;
  //   //   instance.positioninfo = <JobPosition>item;
  //   //   console.log(item)
  //   // });
    
  // }
}
