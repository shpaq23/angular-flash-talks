import {ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Child2Component} from '../child2/child2.component';
import {AbstractChildComponent} from '../abstract.child.component';

@Component({
  selector: 'sp-child2child1',
  templateUrl: './child2child1.component.html',
  styleUrls: ['./child2child1.component.scss']
})
export class Child2child1Component implements OnInit {

  componentName = 'Child2Child1';

  constructor(public cdr: ChangeDetectorRef,
              public child2: Child2Component,
              public applicationRef: ApplicationRef) {
  }

  ngOnInit() {
    // this.cdr.checkNoChanges();
    // setTimeout(() => {
    //   this.child2.cdr.markForCheck();
    //   this.applicationRef.tick();
    // }, 2000);
  }

}
