import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../fakedata/chiliData";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class UserService{

  url : string = "http://localhost:3000/user"

  constructor(
    private _client : HttpClient
  ){

  }


  getUser(){
    return this._client.get<User[]>(this.url)
  }


  login(loginfo : any) : Observable<any>{
    return this._client.post<any>(this.url, loginfo)
  }

  addUser(form : any) : Observable<User>{
    return this._client.post<User>("http://localhost:3000/user", form)
  }

}
