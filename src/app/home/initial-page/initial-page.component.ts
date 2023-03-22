import { Component, Injector, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonService } from 'src/app/Utills/common.service';
import { commonBase } from 'src/app/Utills/commonBase';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {CdkDragDrop, moveItemInArray,transferArrayItem} from '@angular/cdk/drag-drop';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { IndexDBService } from 'src/app/Utills/index-db.service';
@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.scss'],
  encapsulation:ViewEncapsulation.Emulated,
  
})
export class InitialPageComponent extends commonBase implements OnInit {

  constructor(public inject:Injector, public service:CommonService, public db:IndexDBService) { super(inject) }
  ticket:FormGroup = new FormGroup({})
  startTime?:Date;
  endTime?:Date
  uiBlockedFor?:number
  value1:any
  value2:any
  firstgroup:FormGroup = this.fb.group({
    data:this.fb.array([])
  })
  secodeGroup:FormGroup = this.fb.group({
    data:this.fb.array([])
  })
  arrayOfValue:Array<string> = [
    "ajay",
    "sankar",
    "Angular",
    "Developer"
  ]
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];
  
  ngOnInit(): void {
    // this.ticket = this.service.ticketDetail
    this.todo.forEach((res)=>{
      ((this.firstgroup as FormGroup).get('data') as FormArray).push(this.fb.group({
        value:this.fb.control(res)
      }));
    })
    this.done.forEach((res)=>{
      ((this.secodeGroup as FormGroup).get('data') as FormArray).push(this.fb.group({
        value:this.fb.control(res)
      }))
    })

    this.db.openIndexDb(1)
  }
  profile:boolean = false
  over(){
    this.profile=true
  }
  // drop(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.arrayOfValue, event.previousIndex, event.currentIndex);
  // }
  executedFunction(){
    this.startTime = new Date()
    for(let i = 0; i <1000000000; i++){

    }
    this.endTime = new Date()
    this.uiBlockedFor = this.endTime.valueOf() - this.startTime.valueOf()
  }


  openSnackBar(){

    this.snackbar.openSnackbar("happy",'',"Error")
    console.log("here");
    let url = 'user'
    this.apiservice.get(url).subscribe((res:any)=>{
      console.log(res);
    })
    
  }
  convertControl(value:any){
    return value as FormArray
  }
  out(){
    this.profile=false
    console.log(2);
  }
  render():Boolean{
    console.log("render")
    return true
  }
  drop(event: any) {
    console.log(event);
    console.log(event);
    
    if (event.previousContainer === event.container) {
      moveItemInArray((event.container.data as FormArray).controls, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        (event.previousContainer.data as FormArray).controls,
        (event.container.data as FormArray).controls,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  question1(){
    if(Number(this.value1) === Number(this.value2)){
      console.log("Values are equal");
    }else if(Number(this.value1) > Number(this.value1)){
      console.log(`${this.value1} is greater than ${this.value2}`);
    }else{
      console.log(`${this.value2} is greater than ${this.value1}`);
    }
  }
  question2(){
    let productOfValues = Number(this.value1) * Number(this.value2)
    let sign
    console.log(productOfValues);
    if(Math.sign(productOfValues) === 1 || Math.sign(productOfValues) === 0){
      sign = '+'
    }else{
      sign = '-'
    }
    window.alert(`The sign of the output is ${sign}`)
  }

}
