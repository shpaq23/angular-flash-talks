import {ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AbstractChildComponent} from '../abstract.child.component';
import {ChildShareService} from '../child.share.service';

@Component({
  selector: 'sp-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {

  updateInput: string;

  componentName = 'Child2';

  constructor(public cdr: ChangeDetectorRef,
              private service: ChildShareService,
              private appRef: ApplicationRef) {
  }

  ngOnInit() {
    // setTimeout(() => {
    //   console.log('timeout');
    //   this.updateInput = 'inputUpdated' + '1';
    //   this.cdr.detectChanges();
    // }, 2000);
    // this.service.selectValue()
    //   .subscribe(value => {
    //     this.updateInput = value;
    //     this.appRef.tick();
    //   });
  }

}
