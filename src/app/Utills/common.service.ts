import { Injectable, Injector } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { commonBase } from './commonBase';
@Injectable({
  providedIn: 'root'
})
export class CommonService extends commonBase{
  public showEditCart = new BehaviorSubject({openEditCart:false})
  constructor(public inj:Injector) { super(inj) }
  data = [1,2,3]
  openEditCart(openEditCart:boolean){
    this.showEditCart.next({openEditCart})
  }
  public ticketBookingDetails:FormGroup = this.fb.group({
    totalTicketCount:this.fb.control(0),
    totalTicketPrice:this.fb.control(0),
    totalTaxPrice:this.fb.control(0),
    placeticketdetail:this.fb.array([])
})


  

}
