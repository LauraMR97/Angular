import { UserResponseCreate } from "./req.userCreate";
export class UserCreate{

  static userfromJSON(obj: UserResponseCreate){
    return new UserCreate(
      obj['nombre'],
      obj['email'],
      obj['password1'],
      obj['password2'],
      obj['rol'],
    );
  }


  constructor(
public nombre: string,
public email: string,
public password1: string,
public password2: string,
public rol: number
  ){}
}
