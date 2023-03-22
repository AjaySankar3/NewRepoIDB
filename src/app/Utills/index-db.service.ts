import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndexDBService {

  constructor() {
    // this.openIndexDb(1)
  }
  dataBase!: IDBDatabase

  public openIndexDb(version: any) {
    let initIndexDB
    version !== 1 ? initIndexDB = indexedDB.open('userList', version) : initIndexDB = indexedDB.open('narutoList');

    initIndexDB.onerror = (event) => {
      console.log(event);
    }

    initIndexDB.onsuccess = (event) => {
      console.log(event);
      this.dataBase = (event.target as IDBRequest).result
    }

    initIndexDB.onupgradeneeded = (event) => {
      let db: IDBDatabase = (event.target as IDBRequest).result
      const objectStore = db.createObjectStore('list', { keyPath: "id", autoIncrement: true })
      objectStore.createIndex('age', 'age', { unique: true })
      objectStore.createIndex('range', ['userAddress','numberOfPeopleCome'], { unique: true })
    }
  }
}
