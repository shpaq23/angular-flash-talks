import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'sp-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {
  name = 'I am A component';
  text = 'A message for the child component';

  constructor() {
  }

  ngOnInit() {
  }

}
