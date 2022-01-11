import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaniver',
  templateUrl: './vaniver.component.html',
  styleUrls: ['./vaniver.component.scss']
})
export class VaniverComponent implements OnInit {

  public imgLogo: string;
  constructor() {
    this.imgLogo="../assets/vestido.png";
   }

  ngOnInit(): void {
  }

}
