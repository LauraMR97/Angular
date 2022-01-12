import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quien',
  templateUrl: './quien.component.html',
  styleUrls: ['./quien.component.scss']
})
export class QuienComponent implements OnInit {


  public imgLogo: string;
  constructor() {
    this.imgLogo="../assets/vestido.png";
   }

  ngOnInit(): void {
  }

}
