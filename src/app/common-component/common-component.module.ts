import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentRoutingModule } from './common-component-routing.module';
import { CounterFieldComponent } from './counter-field/counter-field.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    CounterFieldComponent,
    SnackBarComponent
  ],
  imports: [
    CommonModule,
    CommonComponentRoutingModule,MaterialModule
  ],
  exports:[
    CounterFieldComponent
  ]
})
export class CommonComponentModule { }
