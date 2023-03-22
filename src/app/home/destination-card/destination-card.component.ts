import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailsDialogComponent } from '../details-dialog/details-dialog.component';

@Component({
  selector: 'app-destination-card',
  templateUrl: './destination-card.component.html',
  styleUrls: ['./destination-card.component.scss'],
  standalone:true,
  imports:[SharedModule,CommonModule]
})
export class DestinationCardComponent implements OnInit {

  constructor( public dialog:MatDialog) { }
  @Input()data!:any
  // @Output() selectedCard:EventEmitter<any> = new EventEmitter
  @Output() selectedCard:EventEmitter<any> = new EventEmitter;
  ngOnInit(): void {
  }
  explore(value?:any){
    this.dialog.open(DetailsDialogComponent,{
      width:"60%",
      height:"70vh"
    });
  }


}
