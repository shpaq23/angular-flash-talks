import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Component1Component} from '../component1/component1.component';

@Component({
  selector: 'sp-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component implements OnInit, AfterViewInit {

  @Input()
  text;

  constructor(private readonly component1: Component1Component) { }

  ngOnInit() {
    console.log('OnInit na dziecku');
    this.component1.name = 'updated text';

  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit na dziecku');
    // this.component1.text = 'updated text';
  }

}
