import { ChangeDetectionStrategy, Component, Injector, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { commonBase } from 'src/app/Utills/commonBase';
import { CommonService } from 'src/app/Utills/common.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { debounceTime, distinctUntilChanged, filter, fromEvent, map, Subject, tap } from 'rxjs';
import { buffer } from 'rxjs';
import { AddusersDetailComponent } from '../addusers-detail/addusers-detail.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.scss'],
  template:`<ng-content></ng-content>`,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TicketCardComponent extends commonBase implements OnInit {

  constructor(public inject:Injector, public service:CommonService, public dialog:MatDialog) { super(inject)}
  subject = new Subject()
  search:FormControl = this.fb.control('')
  ngOnInit(): void {
    this.destinationData.forEach((item:any)=>{
      this.ticket.controls.push(this.convertIntoControl(item) as FormGroup)
    })
    this.subject.pipe(debounceTime(500),distinctUntilChanged(), filter((x) => this.search.getRawValue().length >= 5),map((x:any)=> x*3)).subscribe((res:any)=>{
      console.log(this.search.getRawValue());
      console.log("res",res);
    })
    // let click = fromEvent(document,"click")
    // let buff = click.pipe(debounceTime(300))
    // click.pipe(
    //   buffer(buff),
    //   map(x => x.length),
    //   tap(x => console.log(x)),
    //   filter(x => x===2)
    // ).subscribe((res)=>{
      // this.dialog.open(AddusersDetailComponent,{
      //   width:'10em',
      //   height:'10em'
      // })
    // }
    // )
  }
  convertIntoControl(data:any){
    return this.fb.group({
      place_name:this.fb.control(data.place_name?data.place_name:''),
      spots:this.fb.control(data.spots?data.spots:''),
      priceFrom:this.fb.control(data.priceFrom?data.priceFrom:''),
      priceTo:this.fb.control(data.priceTo?data.priceTo:''),
      image:this.fb.control(data.image?data.image:''),
      numberOfItem:this.fb.control(data.numberOfItem?data.numberOfItem:''),
      taxPerCount:this.fb.control(data.taxPerCount?data.taxPerCount:'')
    })
  }
  get ticket(){
    return this.service.ticketBookingDetails.get('placeticketdetail') as FormArray
  }
  customOptions:OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    margin: 20,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      }
    },
    nav: false
  }

  change(value:Event){
    console.log(value);
    
  }

  emitedData(value:any){
    console.log("Selected value = ",value);
  }

  ngOnDestroy(){
    this.subject.unsubscribe()
  }
 

}

