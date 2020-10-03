import {ChangeDetectorRef, Component} from '@angular/core';

@Component({
  selector: 'sp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  value = 'Value From Parent';

  constructor(private readonly cdr: ChangeDetectorRef) {}

  onValueChanged(newValue: string): void {
    console.log('on parent new value');
    this.value = newValue;
    // this.cdr.detectChanges();
  }

}
