import { Component, OnInit } from '@angular/core';
import { LoginDto } from 'src/app/dto/login.dto';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { Router } from '@angular/router';
import { SingUpDto } from 'src/app/dto/signUp.dto';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  //email:string;
  //password:string;
  registrarUsuario: SingUpDto;
  //confirmarPassword:string;
  //usuario: LoginDto;

  constructor(private servicioUsuario: UsuarioService, private router: Router) {
    this.registrarUsuario = new SingUpDto('','','','UDEMYANDROID');
  }

  ngOnInit(): void {
  }

  registrar(){
    //const usuario = {}
    this.servicioUsuario.registro(this.registrarUsuario).subscribe(
      data => {
        localStorage.setItem('token', data.code);
        this.servicioUsuario.setToken(data.code);
        this.router.navigateByUrl('/login');
      }, error => {
        console.log(error);
      }
    );
  }

}
