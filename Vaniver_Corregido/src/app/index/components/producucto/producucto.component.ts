import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producucto',
  templateUrl: './producucto.component.html',
  styleUrls: ['./producucto.component.scss']
})
export class ProducuctoComponent implements OnInit {

  public imgLogo: string;
  constructor() {
    this.imgLogo="../assets/vestido.png";
   }

  ngOnInit(): void {
  }

}
