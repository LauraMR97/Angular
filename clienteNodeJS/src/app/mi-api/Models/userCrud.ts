import {UserResponseCrud} from "./req.userCrud";
export class UserCrud{

  static userfromJSON(obj: UserResponseCrud){
    return new UserCrud(
      obj['nombre'],
      obj['email'],
      obj['password'],
    );
  }


  constructor(
public nombre: string,
public email: string,
public password: string,
  ){}
}
