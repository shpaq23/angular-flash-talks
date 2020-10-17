import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AbstractChildComponent} from '../abstract.child.component';

@Component({
  selector: 'sp-child1child2',
  templateUrl: './child1child2.component.html',
  styleUrls: ['./child1child2.component.scss']
})
export class Child1child2Component implements OnInit {

  updateInput: string;

  componentName = 'Child1Child2';

  constructor(private readonly cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    // setTimeout(() => {
    //   console.log('timeout');
    //   this.updateInput = 'Input updated';
    //   this.cdr.detectChanges();
    // }, 2000);
  }

}
