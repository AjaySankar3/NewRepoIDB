import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatChipInputEvent } from '@angular/material/chips';
import { ThemePalette } from '@angular/material/core';
import { MatRadioChange } from '@angular/material/radio';
import { map, Observable, startWith } from 'rxjs';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) { }
  @ViewChild('res') res!:TemplateRef<any>
  radiobutton = false
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  labelPosition: String= '';
  filteredOptions!: Observable<string[]>;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl('');
  filteredFruits!: Observable<string[]>;
  // fruits: string[] = ['Lemon']; 
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
  @ViewChild('fruitInput') fruitInput!: ElementRef<HTMLInputElement>;
  ngOnInit(): void {
    // this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
    //   startWith(null),
    //   map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allFruits.slice())),
    // );
    this.myControl.valueChanges.subscribe((res)=>console.log("res",res)
    )
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this.filterFunction(value)),
    );
  }
  filterFunction(value:any){
    const filterValue = value.toLowerCase();
    
    return this.options.filter(res => {      
      return res.toLowerCase().includes(filterValue)
    })
    
    
  }
  openBottomSheet(): void {
    let sheet = this._bottomSheet.open(this.res);
    sheet.afterDismissed().subscribe((res)=>{
      console.log('controlValue',res);
      
    })
  }

  closeSheet(){
    this._bottomSheet.dismiss({data:this.myControl.value})
  }
  radio(value:MatRadioChange){
    console.log(value);
  }
  checkbox(value:MatCheckboxChange){
    console.log(value);
    
  }

  task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Primary', completed: false, color: 'primary'},
      {name: 'Accent', completed: false, color: 'accent'},
      {name: 'Warn', completed: false, color: 'warn'},
    ],
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
  }

  ///////Chips///////
visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;


  @ViewChild("chipList") chipList:any;

  fruits = [{ name: "Lemon" }, { name: "Lime" }, { name: "Apple" }];

  add(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;

    // Add our fruit
    if ((value || "").trim()) {
      this.fruits.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = "";
    }

    if (this.fruits.length > 3) {
      this.chipList.errorState = true;
    }
  }

  remove(fruit: any): void {
    let index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }

    if (this.fruits.length <= 3) {
      this.chipList.errorState = false;
    }
  }

  setError() {
    this.chipList.errorState = true;
  }





}
export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

