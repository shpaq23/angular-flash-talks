import {Component, OnInit} from '@angular/core';
import {Example1, Example2} from './enums';

@Component({
  selector: 'sp-flash-talks-1',
  templateUrl: './flash-talks-1.component.html',
  styleUrls: ['./flash-talks-1.component.scss']
})
export class FlashTalks1Component implements OnInit {

  example1: Example1 = Example1.A;
  example2: Example2 = Example2.A;

  constructor() { }

  ngOnInit() {
  }

}
