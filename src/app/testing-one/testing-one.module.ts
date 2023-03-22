import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestingOneRoutingModule } from './testing-one-routing.module';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule,
    TestingOneRoutingModule
  ]
})
export class TestingOneModule { }
