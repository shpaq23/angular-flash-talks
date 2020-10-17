import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlashTalks1Component } from './flash-talks/flash-talk-1/flash-talks-1.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { Child1child1Component } from './child1child1/child1child1.component';
import { Child1child2Component } from './child1child2/child1child2.component';
import { Child1child2child1Component } from './child1child2child1/child1child2child1.component';
import { Child2child1Component } from './child2child1/child2child1.component';
import { WtfComponent } from './wtf/wtf.component';

@NgModule({
  declarations: [
    AppComponent,
    FlashTalks1Component,
    ChangeDetectionComponent,
    Component1Component,
    Component2Component,
    Child1Component,
    Child2Component,
    Child3Component,
    Child1child1Component,
    Child1child2Component,
    Child1child2child1Component,
    Child2child1Component,
    WtfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
