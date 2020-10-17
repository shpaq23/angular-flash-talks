import {ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {Child1Component} from './child1/child1.component';

@Component({
  selector: 'sp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild(Child1Component, { static: false })
  child1Component: Child1Component;

  value = 'Value From Parent';

  constructor(private readonly cdr: ChangeDetectorRef,
              public appRef: ApplicationRef) {
  }

  ngOnInit(): void {
    this.cdr.detach();
  }

}
