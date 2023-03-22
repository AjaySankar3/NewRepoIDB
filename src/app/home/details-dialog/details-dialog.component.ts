import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {CdkDragDrop, moveItemInArray,transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-details-dialog',
  templateUrl: './details-dialog.component.html',
  styleUrls: ['./details-dialog.component.scss']
})
export class DetailsDialogComponent implements OnInit {

  constructor(public fb:FormBuilder) { }
  masterGroup:FormGroup = new FormGroup({});
  first:FormArray = this.fb.array([]);
  second:FormArray = this.fb.array([]);
  firstgroup:FormGroup = this.fb.group({
    data:this.fb.array([])
  })
  secodeGroup:FormGroup = this.fb.group({
    data:this.fb.array([])
  })
  listArray:Array<any> = []
  value = {
  "isbn": "123-456-222",  
  "author": 
     {
       "lastname": "Doe",
       "firstname": "Jane"
     },
 "editor": 
     {
       "lastname": "Smith",
       "firstname": "Jane"
     },
   "title": "The Ultimate Database Study Guide",  
   "category": ["Non-Fiction", "Technology"]
  } 
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  ngOnInit(): void {
    this.masterGroup = this.fb.group({
      totalCount:this.fb.control(''),
      data:this.fb.array([
        this.addGroup()
      ])
    })
    this.listArray = [0]
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

  }
  drop(event: any) {
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
  // dropp(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(((this.masterGroup as FormGroup).get('data') as FormArray).controls, event.previousIndex, event.currentIndex);
  // }
  addGroup(){
    return this.fb.group({
      name:this.fb.control('',Validators.required),
      emailId:this.fb.control('',Validators.required),
      phoneNumber:this.fb.control('',Validators.required),
    })
  }
  addAdress(index:number){
    ((((this.masterGroup as FormGroup).get("data") as FormArray).at(index) as FormGroup).get('addressArray') as FormArray)
     ?     ((((this.masterGroup as FormGroup).get("data") as FormArray).at(index) as FormGroup).get('addressArray') as FormArray).push(this.pushAdressintoArray()) 
      : (((this.masterGroup as FormGroup).get("data") as FormArray).at(index) as FormGroup).addControl("addressArray", this.fb.array([
        this.pushAdressintoArray()
      ]))  
  }

  pushAdressintoArray(){
    return this.fb.group({
      addressOne:this.fb.control('',Validators.required),
      DoorNumber:this.fb.control('',Validators.required),
    })
  }
  updateValue(){
    ((this.masterGroup as FormGroup).get('data') as FormArray).push(this.addGroup())
    this.listArray = [...this.listArray,this.listArray.length]
  }
  get arraydata(){
    return (this.masterGroup as FormGroup).get('data') as FormArray
  }
  save(){
    console.log(this.masterGroup.getRawValue())
  }
  convertControl(value:any){
    return value as FormArray
  }
}

export interface value {
  "isbn":String,
  "author":ob1,
  "editor":ob1,
  "title":String,
  "category":Array<String>
}

export interface ob1{
  "lastname": String,
  "firstname": String
}
