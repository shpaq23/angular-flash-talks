import {ApplicationRef, ChangeDetectionStrategy, Component, NgZone, OnInit} from '@angular/core';
import {AbstractChildComponent} from '../abstract.child.component';
import {AppComponent} from '../app.component';

@Component({
  selector: 'sp-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.scss']
})
export class Child3Component implements OnInit {

  componentName = 'Child3';

  constructor(public appComponent: AppComponent,
              public appRef: ApplicationRef,
              public ngZone: NgZone) {
  }

  ngOnInit() {
    // this.ngZone.run(() => {
    //   setTimeout(() => {
    //     console.log('timeout');
    //     this.appComponent.child1Component.cdr.detach();
    //   }, 2000);
    // });
  }

}
