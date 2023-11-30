import { Validators } from "@angular/forms";

export const AddUser = {
  nickname : ["", [Validators.required, Validators.maxLength(25), Validators.minLength(3)] ],
  email : ["", [Validators.required, Validators.email]],
  password : ["", [Validators.required, Validators.minLength(4)]],
  admin : [false, [Validators.required]]
}
