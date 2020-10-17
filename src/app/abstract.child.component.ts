import {Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

export abstract class AbstractChildComponent {

  @Input()
  inputValue: string;

  abstract componentName: string;

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('NgOnChanges: ', this.componentName);
  // }
  //
  // ngOnInit(): void {
  //   console.log('NgOnInit: ', this.componentName);
  // }
}
