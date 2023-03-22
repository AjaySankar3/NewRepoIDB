import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestingSecondRoutingModule } from './testing-second-routing.module';
import { TestingComponent } from './testing/testing.component';


@NgModule({
  declarations: [
    TestingComponent
  ],
  imports: [
    CommonModule,
    TestingSecondRoutingModule
  ]
})
export class TestingSecondModule { }
