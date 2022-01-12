import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss']
})
export class ComprasComponent implements OnInit {

  public imgLogo: string;
  constructor() {
    this.imgLogo="../assets/vestido.png";
   }


  ngOnInit(): void {
  }

}
