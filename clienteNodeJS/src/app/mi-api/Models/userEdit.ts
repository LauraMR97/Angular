import { UserResponseEdit } from "./req.userEdit";
export class UserEdit{

  static userfromJSON(obj: UserResponseEdit){
    return new UserEdit(
      obj['nombre'],
      obj['email'],
      obj['password'],
      obj['personaAnt'],
      obj['rol'],
    );
  }


  constructor(
public nombre: string,
public email: string,
public password: string,
public personaAnt: string,
public rol: number
  ){}
}
