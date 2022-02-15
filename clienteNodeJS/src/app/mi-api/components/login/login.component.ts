import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {User} from '../../Models/user';
import {RestNodeService} from '../../services/rest-node.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  public rol:string;
  public pass: string;

  loginUsuario: FormGroup;
  submitted: boolean =false;
  user?:User;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private restLoginService: RestNodeService,
  ) {

    this.rol='';
    this.pass='';

    this.loginUsuario= this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.pattern]]
    });
  }

  ngOnInit(): void {
  }

  get formulario(){
    return this.loginUsuario.controls;
  }

  onSubmit(){
      this.submitted=true;
      if(this.loginUsuario.invalid){
        return;
      }
      this.pass=this.loginUsuario.value.password;


      //Podemos obtener en un json TODOS los valores de los controles del formulario
      //let user= this.loginUsuario.value;
      this.user= new User("","",this.loginUsuario.value.email,0,"");
      this.onReset();

      this.getRol();


     this.restLoginService.login(this.user.email,this.pass).subscribe({
       next:(user)=>{
        console.log(user);
         if(this.rol=='2'){
         // this.restLoginService.darCorreo(user.email);
        this.user= user;
        this.router.navigate(['/user']);
        //this.tema =(sessionStorage.getItem('tema') || '{}');
      }else{
        //this.restLoginService.darCorreo(user.email);
        this.user= user;
        this.router.navigate(['/admin']);
      }
       },
       error: e =>{
        console.log(e);
       }
     })
    }

     public getRol(){
      this.restLoginService.rolAsignado.subscribe(rol =>{
        this.rol=rol;
      });
    }


    //Limpia el Formulario
    onReset(){
      this.submitted=false;
      this.loginUsuario.reset();
    }

    onRegister(){
      this.router.navigate(['registro']);
    }


}
