import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  public title : string;
  public imagen: string;

  constructor() {
    this.title='Animal Crossing New Horizons';
    this.imagen='../assets/acnh.jpeg';
   }
  ngOnInit(): void {

  }

}
