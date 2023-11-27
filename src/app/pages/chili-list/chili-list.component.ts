import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChiliService } from '../../services/chili.service';
import { ChiliData } from '../../fakedata/chiliData';
import { DescriptComponent } from '../descript/descript.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chili-list',
  templateUrl: './chili-list.component.html',
  styleUrls: ['./chili-list.component.scss']
})
export class ChiliListComponent {
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


}
