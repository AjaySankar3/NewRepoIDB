import { Component, Injector, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Subject } from 'rxjs';
import { commonBase } from 'src/app/Utills/commonBase';
import { AddusersDetailComponent } from '../addusers-detail/addusers-detail.component';
@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent extends commonBase implements OnInit {

  constructor(public dialog:MatDialog,public inject:Injector) { super(inject) }

  ngOnInit(): void {
  }
  // @ViewChild('userId') userId!:
  subject:Subject<any> = new Subject()
  data:BehaviorSubject<any> = new BehaviorSubject({value:""})
  package= [
    {value: 'Family'},
    {value: 'College'},
    {value: 'Honymoon'},
    {value: 'Kids'},
  ];
  selected:string| null = ''
  @ViewChild('registor') registor!: TemplateRef<any>;
  @ViewChild('login') login!: TemplateRef<any>;
  loginDetail:FormGroup = this.fb.group({
    email:this.fb.control(''),
    password:this.fb.control('')
  })
  registorUser:FormGroup = this.fb.group({
    first_name:this.fb.control(''),
    last_name:this.fb.control(''),
    email:this.fb.control(''),
    password:this.fb.control('')
  })
  crud:FormGroup = this.fb.group({
    full_name:this.fb.control(''),
    email:this.fb.control(''),
    password:this.fb.control(''),
  })
  openDialog(){
    if(localStorage.getItem('userIf')){
      this.dialog.open(this.registor,{width:'30%'})
    }else{
      this.dialog.open(this.login)
    }
  }
  loginApiCall(){
    let data = {
      email:this.loginDetail.getRawValue().email,
      password:this.loginDetail.getRawValue().password
    }
    let url = "login"
    this.apiservice.post(url,data).subscribe((res:any)=>{
      
    })
  }
  registorApiCall(){
    let url = "add/register"
    let data ={
      first_name:this.registorUser.getRawValue().first_name,
      last_name:this.registorUser.getRawValue().last_name,
      email:this.registorUser.getRawValue().email,
      password:this.registorUser.getRawValue().password
    }
  }
  Registor(){
    console.log("here");
    let url = "supplier/pdf";
    let data = {
      "day":"Monday",
      "date":"10",
      "month" : "10",
      "year": "2023",
      "timeFrom" : "10.00",
      "timeTo" : "02.00"
    }
    this.apiservice.get(url).subscribe((res)=>{
      console.log(res);
    })

    // let url = "/post"
    // let data = {
    //   ...this.crud.getRawValue()
    // }
    // this.apiservice.post(url,data).subscribe((res)=>{

    // })
  }
  addUser(){
    this.dialog.open(AddusersDetailComponent)
  }

  get(){
    let url ="/"
    this.apiservice.get(url).subscribe((res:any)=>{
      console.log(res);
    })
  }
  put(){
    let url = `/63aac4b1f696f7b496514d61`
    let data = {
      ...this.crud.getRawValue()
    }
    this.apiservice.put(url,data).subscribe((res:any)=>{
      console.log(res);
    })
  }
  post(){
    let data = {
      ...this.crud.getRawValue()
    }
    let url = `/`
    this.apiservice.post(url,data).subscribe((res:any)=>{
      console.log(res);
    })
  }
  deletee(){
    let url = `/63aa93a3e3557e92d89b0bfd`
    this.apiservice.delete(url).subscribe((res:any)=>{
      console.log(res);
    })
  }
}

