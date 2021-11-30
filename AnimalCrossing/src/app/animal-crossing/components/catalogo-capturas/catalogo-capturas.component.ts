import { Component, OnInit } from '@angular/core';
import { RestAnimalCatalogoService } from '../../services/rest-animal-catalogo.service';

@Component({
  selector: 'app-catalogo-capturas',
  templateUrl: './catalogo-capturas.component.html',
  styleUrls: ['./catalogo-capturas.component.scss']
})
export class CatalogoCapturasComponent implements OnInit {

  constructor(private restCatalogoService: RestAnimalCatalogoService) { }

  ngOnInit(): void {
    this.getCatalogo();
  }

  public getCatalogo(){
    this.restCatalogoService.getCatalogo().subscribe((response)=>{
console.log(response);
    });
  }
}
