import {AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, NgZone, OnInit, Output} from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'sp-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss']
})
export class ChangeDetectionComponent implements OnInit {

  @Input()
  value: string;

  @Output()
  valueChanged = new EventEmitter<string>();

  constructor(private readonly appComponent: AppComponent,
              private readonly ngZone: NgZone,
              private readonly cdr: ChangeDetectorRef) {
  }


  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.value = 'Value changed';
        this.valueChanged.emit(this.value);
        // this.cdr.detectChanges();
        console.log('emiited');
      }, 2000);
    });
  }

}
