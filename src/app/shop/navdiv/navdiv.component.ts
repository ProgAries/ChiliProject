import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navdiv',
  templateUrl: './navdiv.component.html',
  styleUrls: ['./navdiv.component.scss']
})
export class NavdivComponent {

  constructor(
    private _router : Router
  ){}

  navToChiliShop(){
    this._router.navigate(["/chilishop"])
  }

  navToSauceShop(){
    this._router.navigate(["/sauceshop"])
  }

}
