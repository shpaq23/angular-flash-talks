import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, SimpleChanges} from '@angular/core';
import {AbstractChildComponent} from '../abstract.child.component';

@Component({
  selector: 'sp-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {

  componentName = 'Child1';

  constructor(public cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

}
