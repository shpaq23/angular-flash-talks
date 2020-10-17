import {AfterViewInit, ApplicationRef, ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Child1Component} from '../child1/child1.component';
import {AbstractChildComponent} from '../abstract.child.component';
import {ChildShareService} from '../child.share.service';

@Component({
  selector: 'sp-child1child1',
  templateUrl: './child1child1.component.html',
  styleUrls: ['./child1child1.component.scss']
})
export class Child1child1Component implements OnInit, AfterViewInit {

  componentName = 'Child1Child1';

  constructor(public appRef: ApplicationRef,
              public child1: Child1Component,
              private readonly service: ChildShareService) {
  }

  ngOnInit() {
    console.log('child on init');
    // setTimeout(() => {
    //   console.log('timeout');
    //   this.service.setValue('Next value');
    // }, 2000);
  }

  ngAfterViewInit(): void {
    console.log('child after view init');
  }

}
