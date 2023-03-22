import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { }
  get(apiUrl:string):Observable<any>{
    return this.http.get(apiUrl)
  }
  post(apiUrl:string, data:any):Observable<any>{
    return this.http.post(apiUrl,data)
  }
  put(apiUrl:string, data:any):Observable<any>{
    return this.http.put(apiUrl,data)
  }
  delete(apiUrl:string):Observable<any>{
    return this.http.delete(apiUrl)
  }
  getDataWithParams(apiUrl:string, data:any){
    return this.http.get(apiUrl, {params:data})
  }
}
