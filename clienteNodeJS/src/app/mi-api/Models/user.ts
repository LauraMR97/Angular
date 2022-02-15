import { TokenType } from "@angular/compiler";
import { Token } from "@angular/compiler/src/ml_parser/tokens";
import {UserResponseLogin} from "./req.response";
export class User{

  static userfromJSON(obj: UserResponseLogin){
    return new User(
      obj['message'],
      obj['nombre'],
      obj['email'],
      obj['roles'],
      obj['accessToken'],
    );
  }


  constructor(
public message: string,
public nombre: string,
public email: string,
public roles: number,
public accessToken: string,
  ){}
}
