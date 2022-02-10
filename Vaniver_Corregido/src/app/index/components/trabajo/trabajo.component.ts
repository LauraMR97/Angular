import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trabajo',
  templateUrl: './trabajo.component.html',
  styleUrls: ['./trabajo.component.scss']
})
export class TrabajoComponent implements OnInit {

  public imgLogo: string;
  constructor() {
    this.imgLogo="../assets/vestido.png";
   }


  ngOnInit(): void {
  }

}
