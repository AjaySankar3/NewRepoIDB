import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDrawer } from '@angular/material/sidenav';
import { CommonService } from '../Utills/common.service';
@Component({
  selector: 'app-side-heading',
  templateUrl: './side-heading.component.html',
  styleUrls: ['./side-heading.component.scss']
})
export class SideHeadingComponent implements OnInit {

  constructor(public commonService:CommonService) { }
  @ViewChild('drawer') drawer!: MatDrawer;
  ticket:any = new FormGroup({})
  ngOnInit(): void {
    this.commonService.showEditCart.subscribe((res:any)=>{
      console.log(res);
      console.log(this.drawer);
      if(res.openEditCart){
        this.drawer.open()
      }else if(!res.openEditCart) {
        // console.log("here");
        // this.drawer.close()
      }
    })
    // this.ticket = this.commonService.ticketDetail
  }
  data:data = {
    "profile1" : false,
    "profile2" : false,
    "profile3" : false,
    "profile4" : false,
    "profile5" : false,
    "profile6" : false
  }

  over(value:any){
  }
  out(value:any){
  }

}

interface data {
  [key:string]:boolean
}

