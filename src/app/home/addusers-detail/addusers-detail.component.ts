import { Component, Injector, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { commonBase } from 'src/app/Utills/commonBase';
import { IndexDBService } from 'src/app/Utills/index-db.service';

@Component({
  selector: 'app-addusers-detail',
  templateUrl: './addusers-detail.component.html',
  styleUrls: ['./addusers-detail.component.scss']
})
export class AddusersDetailComponent extends commonBase implements OnInit {

  constructor( public inject:Injector, public db:IndexDBService) { super(inject) }

  transaction!:IDBTransaction;
  objectStore!:IDBObjectStore
  userDetails:FormGroup = this.fb.group({
    name:this.fb.control(''),
    userMailId:this.fb.control(''),
    userPhoneNumber:this.fb.control(''),
    userAddress:this.fb.control(''),
    numberOfPeopleCome:this.fb.control(''),
    // othersDetail:this.fb.array([]),
    age:this.fb.control(''),
  })
  ngOnInit(): void {
    ((this.userDetails as FormGroup).get('numberOfPeopleCome') as FormControl).valueChanges.subscribe((res:any)=>{
      if(res){
        // let Details:FormGroup = this.fb.group({
        //   userName:this.fb.control(''),
        //   userMailId:this.fb.control(''),
        //   userPhoneNumber:this.fb.control(''),
        //   userAddress:this.fb.control(''),
        // });
        // ((this.userDetails as FormGroup).get('othersDetail') as FormArray).push(Details)
      }
    })
  }
  get othersDetail() {
    return (this.userDetails as FormGroup).get('othersDetail') as FormArray
  }
  convertintoControl(value:any){
    return (value as FormGroup)
  }
  updateValue(){
    let Details:FormGroup = this.fb.group({
      userName:this.fb.control(''),
      userMailId:this.fb.control(''),
      userPhoneNumber:this.fb.control(''),
      userAddress:this.fb.control(''),
    });
    ((this.userDetails as FormGroup).get('othersDetail') as FormArray).push(Details)
  }
  add(){

    this.getObjectStore()
    let addData = this.objectStore.add(this.userDetails.getRawValue())
    addData.onerror = (event) =>{
      console.log(event);
      
    }
    addData.onsuccess = (event) =>{
      console.log(event);
    }
    
  }
  edit(){
    this.getObjectStore()
    let payload = {
      id:2,
      ...this.userDetails.getRawValue()
    }
    let updateData = this.objectStore.put(payload)
    updateData.onerror = (event) =>{
      console.log("onerror",event);
    }
    updateData.onsuccess = (event) =>{
      console.log(event);
    }
  }
  getDetail(){
    this.getObjectStore()
    let updateData = this.objectStore.getAll();
    updateData.onerror = (event) =>{
      
    };
    updateData.onsuccess = (event) =>{
      console.log((event.target as IDBRequest).result);
      
    }
  }
  deletee(){
  this.getObjectStore();
  let deletedata = this.objectStore.delete(2)
  deletedata.onerror = (event) =>{
      
  };
  deletedata.onsuccess = (event) =>{
    console.log((event.target as IDBRequest).result);
    
  }
  }

  searchThroughIndex(){
    this.getObjectStore();
    let searchvalue = this.objectStore.index('age').openCursor("25")
    searchvalue.onerror = (event) =>{
      console.log(event);
      
    }
    searchvalue.onsuccess = (event) =>{
      console.log("searchThroughIndex",((event.target as IDBRequest).result as IDBCursorWithValue).value)
    }
  }
  searchThroughrange(){
    this.getObjectStore();
    let keyRange = IDBKeyRange.only(['2222', '8']);
    let searchvalue = this.objectStore.index('range').openCursor(['2222', '8'])
    searchvalue.onerror = (event) =>{
      console.log(event);
    }
    searchvalue.onsuccess = (event) =>{
      console.log("searchThroughIndex",((event.target as IDBRequest).result as IDBCursorWithValue).value)
    }
  }
  getObjectStore(){
    this.transaction = this.db.dataBase.transaction(['list'],'readwrite');
    this.objectStore = this.transaction.objectStore('list');
  }


  // getIDBTransaction(tableName:string) {
  //   this.transaction = this.dbConfig?.db.transaction([tableName], 'readwrite');
  //   this.objectStore = this.transaction.objectStore(tableName);
  // }

}
