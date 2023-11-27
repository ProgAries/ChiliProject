import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ChiliData } from "../fakedata/chiliData";
import { BehaviorSubject, Observable, Subject } from "rxjs";


@Injectable({
  providedIn: 'root'
})


export class ChiliService {

url : string = "http://localhost:3000/piments"

  constructor(
    private _client : HttpClient
    ){}

  get()
  {
    return this._client.get<any>(this.url)
  }

  addChili(form : any) : Observable<ChiliData>{
    return this._client.post<ChiliData>("http://localhost:3000/piments", form)
  }

  getById(id : number){
    return this._client.get<any>("http://localhost:3000/piments/"+id)
  }

}

