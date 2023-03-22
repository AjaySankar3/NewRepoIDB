import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { TicketCardComponent } from './ticket-card/ticket-card.component';
import { DestinationCardComponent } from './destination-card/destination-card.component';
import { PackageCardComponent } from './package-card/package-card.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { AddusersDetailComponent } from './addusers-detail/addusers-detail.component';
import { DetailsDialogComponent } from './details-dialog/details-dialog.component';
import { NgOptimizedImage } from '@angular/common'
import { SaComponent } from './sa/sa.component';
import { MaterialComponent } from './material/material.component';

@NgModule({
  declarations: [
    InitialPageComponent,
    TicketCardComponent,
    
    PackageCardComponent,
    UserHeaderComponent,
    AddusersDetailComponent,
    DetailsDialogComponent,
    MaterialComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,NgOptimizedImage,DestinationCardComponent,SaComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class HomeModule { }
