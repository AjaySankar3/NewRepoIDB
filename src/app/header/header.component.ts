import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Utills/common.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public commonService:CommonService) { }

  ngOnInit(): void {
    console.log(this.commonService.data);
    console.log("a");
    console.log("b");
  }
  

}
