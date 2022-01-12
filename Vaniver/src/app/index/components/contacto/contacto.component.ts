import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  public imgLogo: string;
  constructor() {
    this.imgLogo="../assets/vestido.png";
   }


  ngOnInit(): void {
  }

}
