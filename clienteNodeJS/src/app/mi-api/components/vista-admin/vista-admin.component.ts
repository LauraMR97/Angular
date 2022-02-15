import { Component, OnInit } from '@angular/core';
import {RestNodeService} from '../../services/rest-node.service';
import { Router } from '@angular/router';
import { UserCrud } from '../../Models/userCrud';


@Component({
  selector: 'app-vista-admin',
  templateUrl: './vista-admin.component.html',
  styleUrls: ['./vista-admin.component.scss']
})
export class VistaAdminComponent implements OnInit {

  //public personas: UserCrud[] = [];
  public personas: any = []
  public respuesta: any =[];
  public correo: string;


  constructor(
    private restCrudService: RestNodeService,
    private router: Router,

  ) {
    this.correo ='';
   }

  ngOnInit(): void {
    this.getUsuarios();
  }


  public getCorreo(){
    this.restCrudService.correo.subscribe(correo =>{
      this.correo=correo;
    });
  }
  public getUsuarios(){
    this.restCrudService.getUsuarios().subscribe((response)=>{
      this.personas=response;
      console.log( this.personas.personas);
    })
  }
  onVolver(){
    this.router.navigate(['']);
  }

  borrar(correo: string){
    this.restCrudService.borrarUsuario(correo).subscribe((response)=>{
      this.respuesta=response;
    });
    this.getUsuarios();
  }

  editar(correo: string){
    this.restCrudService.darCorreoAsig(correo);
    this.router.navigate(['/edit']);
  }

  add(){
    this.router.navigate(['/crear']);
  }
}
