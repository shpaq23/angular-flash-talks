import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FlashTalks1Component} from './flash-talks/flash-talk-1/flash-talks-1.component';


const routes: Routes = [
  { path: 'flashtalk1', component: FlashTalks1Component },
  { path: '', redirectTo: '/flashtalk1', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
