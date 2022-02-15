import { TextToken, TokenType } from "@angular/compiler/src/ml_parser/tokens";

export interface UserResponseLogin{
   message: string,
   nombre: string,
   email: string,
   roles: number,
   accessToken: string,
}
