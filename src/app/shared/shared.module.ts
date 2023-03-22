import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { CommonComponentModule } from '../common-component/common-component.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MaterialModule,CommonComponentModule,FormsModule,ReactiveFormsModule
  ]
})
export class SharedModule { }
