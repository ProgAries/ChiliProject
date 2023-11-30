import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AddUser } from 'src/app/Forms/addUserForm';
import { User } from 'src/app/fakedata/chiliData';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  fg! : FormGroup;

  users! : User[];
  loggedUser! : User;

  inPass : string = "1234"
  inEmail : string = "a@a.com"

  constructor(
    private _uService : UserService,
    private _fb : FormBuilder,
    private _router : Router
  ){
    this.getUsers();
    this.loggedUser;
    console.log("email : " + this.inEmail)
    console.log("psw : " + this.inPass)
    this.loadAddUserForm()
  }


  getUsers(){
    this._uService.getUser().subscribe({
      next : (data : User[]) => {
        this.users = (data)
        console.log(data)
      }
    })
  }

  verifyIfUser(email :string) : boolean{
    let userTmp = this.users.find(user => user.email == email)
    if(userTmp){
      this.loggedUser = userTmp
      console.log(this.loggedUser.nickname)
      return true
    }
    return false
  }

  login(email : string, psw : string){
    if(!this.verifyIfUser(email)){
      console.log("email inexistant")
    }
    else{
      if(email !== this.loggedUser.email){
        console.log("Email or password incorrect")
      }
      if(psw !== this.loggedUser.password){
        console.log("email or Password incorrect")
      }
      else if(email === this.loggedUser.email && psw === this.loggedUser.password){
        console.log("you are logged", this.loggedUser.email)
        if(this.loggedUser.admin == true){
          localStorage.setItem("IsAdmin", "true")
        }
        else{
          localStorage.setItem("IsAdmin", "false")
        }
        localStorage.setItem("whoIsLogged", this.loggedUser.nickname)
      }
    }
  }

  loadAddUserForm(){
    this.fg = this._fb.group(AddUser)
  }

  signin(){
    if(this.fg.invalid){
      return console.error("invalid form");
    }
    return this._uService.addUser(this.fg.value).subscribe({
      next : () => this._router.navigate(["/list"])
    })
  }

}
