import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RndRoutingModule } from './rnd-routing.module';
import { RndComponent } from './rnd.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    RndComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    RndRoutingModule
  ]
})
export class RndModule { }
