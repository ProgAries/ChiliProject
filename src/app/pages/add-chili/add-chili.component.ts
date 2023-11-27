import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AddChili } from 'src/app/Forms/addChiliForm';
import { ChiliService } from 'src/app/services/chili.service';

@Component({
  selector: 'app-add-chili',
  templateUrl: './add-chili.component.html',
  styleUrls: ['./add-chili.component.scss']
})
export class AddChiliComponent {

  fg! : FormGroup;

  constructor(
    private _service : ChiliService,
    private _fb : FormBuilder,
    private _router : Router
  ){
    this.loadAddModule();
  }


  loadAddModule(){
    this.fg = this._fb.group(AddChili)
  }

  doneAdd(){
    if(this.fg.invalid){
      return console.error("invalid form");
    }
    return this._service.addChili(this.fg.value).subscribe({
      next : () => this._router.navigate(["/list"])
    })
  }

}
