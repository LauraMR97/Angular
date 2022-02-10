import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public imgLogo: string;
  constructor() {
    this.imgLogo="../assets/vestido.png";
   }


  ngOnInit(): void {
  }

}
