import { Component, OnInit } from '@angular/core';
import { RestNodeService } from '../../services/rest-node.service';
import { Router } from '@angular/router';
import { UserCreate } from '../../Models/userCreate';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-user',
  templateUrl: './crear-user.component.html',
  styleUrls: ['./crear-user.component.scss']
})
export class CrearUserComponent implements OnInit {


  addForm:FormGroup;
  submitted: boolean =false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private administracionService: RestNodeService
  ) {




    this.addForm= this.formBuilder.group({
      nombre:['',[Validators.required]],
      email:['',[Validators.required, Validators.email]],
      password1:['',[Validators.required, Validators.pattern]],
      password2:['',[Validators.required, Validators.pattern]],
      id_rol:['',[Validators.required]],
    });
   }

  ngOnInit(): void {
  }


  get formulario(){
    return this.addForm.controls;
  }

  onVolver(){
    this.router.navigate(['/admin']);
  }
  add(){
    this.submitted=true;
    console.log(this.addForm);
    if(this.addForm.invalid)
    return;

    if(this.addForm.value.password1==this.addForm.value.password2){
    let perfil= new UserCreate(
      this.addForm.value.nombre,
      this.addForm.value.email,
      this.addForm.value.password1,
      this.addForm.value.password2,
      this.addForm.value.id_rol=parseInt(this.addForm.value.id_rol),

       );
       console.log(perfil);

       this.administracionService.addUser(perfil).subscribe({
        next:()=>{
        },
        error: e =>{
        }
      })
  }else{
    this.router.navigate(['/admin']);
  }
}

}
