import { Validators } from "@angular/forms";

export const AddChili = {
  photoUrl : [null],
  name : ["", [Validators.required, Validators.maxLength(50), Validators.minLength(3)] ],
  power : [0, [Validators.required]],
  description : ["", [Validators.required, Validators.minLength(20)]]
}

