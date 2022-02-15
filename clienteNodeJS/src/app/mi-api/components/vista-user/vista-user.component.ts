import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vista-user',
  templateUrl: './vista-user.component.html',
  styleUrls: ['./vista-user.component.scss']
})
export class VistaUserComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onVolver(){
    this.router.navigate(['']);
  }
}
