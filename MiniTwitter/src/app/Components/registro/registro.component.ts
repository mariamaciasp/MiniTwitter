import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  email:string;
  password:string;
  confirmarPassword:string;

  constructor() { }

  ngOnInit(): void {
  }

  registrar(){
    console.log(this.email);
    console.log(this.password);
  }

}
