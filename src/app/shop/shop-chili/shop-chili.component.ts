import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChiliService } from 'src/app/services/chili.service';

@Component({
  selector: 'app-shop-chili',
  templateUrl: './shop-chili.component.html',
  styleUrls: ['./shop-chili.component.scss']
})
export class ShopChiliComponent {
  chiliList! : any[];

  constructor(
    private _service : ChiliService,
    private _router : Router
  ){
      this.get()
    }

    get(){
      this._service.get().subscribe({
        next : (data : any[]) => {
          this.chiliList = (data)
          console.log(data)
        },
        error : () => {
        }
      })
    }

    sendId(id : number){
      this._router.navigate(['/descript', id]);
    }

    navToDescript(id : number){
      localStorage.setItem("IsShop", "shop")
      this._router.navigate(["/descript", id])
    }

}
