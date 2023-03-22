import { Component, Inject, Injector, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { commonBase } from 'src/app/Utills/commonBase';
import { CommonService } from 'src/app/Utills/common.service';
@Component({
  selector: 'app-counter-field',
  templateUrl: './counter-field.component.html',
  styleUrls: ['./counter-field.component.scss']
})
export class CounterFieldComponent extends commonBase implements OnInit {

  constructor(public inject:Injector, public service:CommonService) { super(inject) }

  ngOnInit(): void {
    console.log(this.data.getRawValue());
  }
  @Input() data!:FormGroup
  
  
  count(value:Boolean){
    if(value){
      let a = Number(((this.data as FormGroup).get('numberOfItem') as FormControl).getRawValue())
      a = a + 1;
      if(a<=10){
        ((this.data as FormGroup).get('numberOfItem') as FormControl).setValue(a)
      }else{
        this.snackbar.openSnackbar("You cannot add more then 10 count","","Error")
      }
    }else{
      let a = Number(((this.data as FormGroup).get('numberOfItem') as FormControl).getRawValue())
      a = a - 1;
      if(a >=0){
        ((this.data as FormGroup).get('numberOfItem') as FormControl).setValue(a)
      }else{
        ((this.data as FormGroup).get('numberOfItem') as FormControl).setValue(0)
      }
    }
    this.amountAndTotalCalculation()

    console.log(this.service.ticketBookingDetails.getRawValue());
  }

  amountAndTotalCalculation(){
    let totalticketCount = 0
    let totalPrice = 0
    this.service.ticketBookingDetails.getRawValue().placeticketdetail.forEach((item:any)=>{
      if(item.numberOfItem){
        totalticketCount = totalticketCount + item.numberOfItem
        totalPrice = totalPrice + item.priceFrom
      }
    });
    ((this.service.ticketBookingDetails as FormGroup).get('totalTicketCount') as FormControl).setValue(totalticketCount)
  }

}
