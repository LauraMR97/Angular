import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import { RestNodeService } from '../../services/rest-node.service';
import { UserEdit } from '../../Models/userEdit';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  public perfil: any = [];
  public correo: string;
  public correoAnt: string;

  editForm:FormGroup;
  submitted: boolean =false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private restUserService: RestNodeService,
  ) {

    this.correo='';
    this.correoAnt='';


    this.editForm= this.formBuilder.group({
      nombre:['',[Validators.required]],
      correo:['',[Validators.required, Validators.email]],
      password1:['',[Validators.required, Validators.pattern]],
      password2:['',[Validators.required, Validators.pattern]],
      id_rol:['',[Validators.required]],
    });
   }

  ngOnInit(): void {
    this.getCorreo;
    this.getCorreoAsignado();
    this.getUsuario();
  }

  public getCorreo(){
    this.restUserService.correo.subscribe(correo =>{
      this.correo=correo;
    });
  }

  public getCorreoAsignado(){
    this.restUserService.correoAsignado.subscribe(correo =>{
      this.correoAnt=correo;
    });
  }


  public getUsuario(){
    this.restUserService.getUser(this.correoAnt).subscribe((response)=>{
        this.perfil=response;
        console.log(this.perfil.persona);
        //Como es una llamada asincrona, obtengo mi perfil aqui y despues llamo a updateFrom para
        //poner los datos en el formulario
        this.updateForm();
        this.restUserService.darCorreo(this.correo);
      });
    }

    public updateForm(){
      this.editForm.controls['nombre'].setValue(this.perfil.persona.nombre);
      this.editForm.controls['correo'].setValue(this.perfil.persona.correo);
      this.editForm.controls['password1'].setValue(this.perfil.persona.password1);
      this.editForm.controls['password2'].setValue(this.perfil.persona.password2);
      this.editForm.controls['id_rol'].setValue(this.perfil.persona.rol);
    }

    get formulario(){
      return this.editForm.controls;
    }

    onVolver(){
      this.router.navigate(['/admin']);
    }


       editar(){
        this.submitted=true;
        if(this.editForm.invalid)
          return;

       let perfil= new UserEdit(
        this.editForm.value.nombre,
        this.editForm.value.correo,
        this.editForm.value.password1,
        this.correoAnt,
         this.editForm.value.id_rol,
         );

         this.restUserService.editarUser(perfil).subscribe({
           next:(perfil)=>{
            console.log(perfil);
           },
           error: e =>{
             console.log(e);
           }
         })
      }
}
