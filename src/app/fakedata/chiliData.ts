export interface ChiliData {
  id : number,
  photoUrl : string,
  name : string,
  power : number,
  description : string
}

export interface User{
  id : number,
  nickname : string,
  email : string,
  password : string,
  admin : boolean
}
