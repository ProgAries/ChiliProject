import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.scss']
})
export class HeaderNavbarComponent {


  constructor(
    private _router : Router
  ){}

  navToChiliList(){
    this._router.navigate(['/list'])
  }
  navToLogin(){
    this._router.navigate(['/login'])
  }

  navToChiliSauce(){
    this._router.navigate(['/sauce'])
  }

  navToShop(){
    this._router.navigate(['/shop'])
  }
  navToAccount(){
    this._router.navigate(['/account'])
  }

  isLogged() : boolean{
    if(localStorage.getItem("whoIsLogged")){
      return true
    }
    else{
      return false
    }
  }

  navToAdd(){
    this._router.navigate(["/add"])
  }

}
