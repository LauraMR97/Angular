import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {User} from '../Models/user';
import { UserCrud } from '../Models/userCrud';
import {UserResponseLogin} from '../Models/req.response';
import { UserResponseCrud } from '../Models/req.userCrud';
import { UserResponseEdit } from '../Models/req.userEdit';
import {BehaviorSubject, map} from 'rxjs';
import { UserCreate } from '../Models/userCreate';
import { UserEdit } from '../Models/userEdit';

@Injectable({
  providedIn: 'root'
})
export class RestNodeService {

  public correo = new BehaviorSubject<string>("");
  public correoAsignado = new BehaviorSubject<string>("");
  public rolAsignado = new BehaviorSubject<string>("");
  public authToken:string = '';
  constructor(private http:HttpClient) { }

  public login(email:string,password:string){

    let user={
      "email": email,
      "password": password
    }
    let url: string="http://localhost:8090/api/auth/login";
    let headers= new HttpHeaders({
      'Content-Type' : 'application/json',
      //'x-access-token': `${authToken}`,
    });
    return this.http.post<UserResponseLogin>(url,user,{headers:headers}).pipe(
      map((resp:UserResponseLogin)=>{
      this.setToken(resp.accessToken);
        this.darRol(resp.roles);
        return User.userfromJSON(resp);
      })
    );
  }

  public setToken(token: string){
  sessionStorage.setItem('token',token);
  }

  public getToken(){
    this.authToken!=sessionStorage.getItem('token');
    }

public darRol(rol: number){
  this.rolAsignado.next(String(rol));
}

public darCorreo(correo: string){
  this.correo.next(correo);
}
public darCorreoAsig(correo: string){
  this.correoAsignado.next(correo);
}

public darCorreoPersonaRegistrandose(correo: string){
  this.correo.next(correo);
}


public borrarUsuario(correo:string){
  console.log(correo);
  const url: string="http://localhost:8090/api/admin/borrar";
  let headers= new HttpHeaders({
    'Content-Type' : 'application/json',
    'x-access-token': `${sessionStorage.getItem('token')}`,
    'roles': this.rolAsignado.value
  });
  let dato= {email:correo};
  return this.http.post(url,dato,{headers: headers});
}

public editarUser(perfil: UserEdit){
  let url: string="http://localhost:8090/api/admin/editar";
  let headers= new HttpHeaders({
    'Content-Type' : 'application/json',
    'x-access-token': `${sessionStorage.getItem('token')}`,
    'roles': this.rolAsignado.value
  });
  return this.http.post<UserResponseEdit>(url,perfil,{headers:headers}).pipe(
    map((resp:UserEdit)=>{
      return UserEdit.userfromJSON(perfil);
    })
  );
}

public addUser(perfil: UserCreate){
  let url: string="http://localhost:8090/api/admin/add";
  let headers= new HttpHeaders({
    'Content-Type' : 'application/json',
    'x-access-token': `${sessionStorage.getItem('token')}`,
    'roles': this.rolAsignado.value
  });
  return this.http.post<UserCreate>(url,perfil,{headers:headers}).pipe(
    map((resp:UserCreate)=>{
      return UserCreate.userfromJSON(perfil);
    })
  );
}

public getUsuarios(){
  let url: string="http://localhost:8090/api/admin/crud";
  let headers= new HttpHeaders({
    'Content-Type' : 'application/json',
    'x-access-token': `${sessionStorage.getItem('token')}`,
    'roles': this.rolAsignado.value
  });
  return this.http.get<UserResponseCrud>(url,{headers:headers}).pipe(
  );
}

public getUser(correo: string){
  let dato = {email: correo};
  let url: string="http://localhost:8090/api/admin/verUsuario";
  let headers= new HttpHeaders({
    'Content-Type' : 'application/json',
    'x-access-token': `${sessionStorage.getItem('token')}`,
    'roles': this.rolAsignado.value
  });
  return this.http.post<UserCreate>(url,dato,{headers:headers}).pipe(
  );
}

}
