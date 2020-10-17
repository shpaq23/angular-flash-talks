import {ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {AbstractChildComponent} from '../abstract.child.component';
import {Child1Component} from '../child1/child1.component';

@Component({
  selector: 'sp-child1child2child1',
  templateUrl: './child1child2child1.component.html',
  styleUrls: ['./child1child2child1.component.scss']
})
export class Child1child2child1Component implements OnInit {

  @Input()
  newName: string;

  componentName = 'Child1Child2Child1';

  constructor(public cdr: ChangeDetectorRef,
              public appRef: ApplicationRef,
              public child1: Child1Component) {
  }

  ngOnInit() {
    // setTimeout(() => {
    //   console.log('timeout');
    //   this.child1.cdr.detach();
    //   this.child1.cdr.detectChanges();
    // }, 2000);
  }

}
