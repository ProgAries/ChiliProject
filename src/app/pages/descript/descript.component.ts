import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChiliService } from 'src/app/services/chili.service';

@Component({
  selector: 'app-descript',
  templateUrl: './descript.component.html',
  styleUrls: ['./descript.component.scss']
})
export class DescriptComponent {
chiliId! : number;
chiliPeppers : any;

  constructor(
    private _route : ActivatedRoute,
    private _service : ChiliService
  ){

    this._route.params.subscribe(params => {
      this.chiliId = +params['id']; // Converte il parametro in un numero
      console.log(this.chiliId);
    }
  );

  this.getChili(this.chiliId)

}


    getChili(id : number){
      this._service.getById(id).subscribe({
        next : (data : any) => {
          this.chiliPeppers = data
          console.log(data)
        }
      })
    }


}

