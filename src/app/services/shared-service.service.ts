import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  public headerSubject: Subject<any> = new Subject()

  constructor(public _http: HttpClient) { }

  getStateTreeData(): Observable<any> {
    return this._http.get<any>('assets/jsons/angular-tree/tree-node.json');
  }
}
