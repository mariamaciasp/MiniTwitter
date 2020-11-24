import { Component, OnInit } from '@angular/core';
import { LoginDto } from 'src/app/dto/login.dto';
import { UsuarioService } from '../../Services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: LoginDto;
  //email: string;
  //password: string;

  constructor(private servicioUsuario: UsuarioService, private router: Router) {
    this.usuario = new LoginDto('', '');
  }

  ngOnInit() {
  }

  login(){
    //const usuario ={email:this.email, password:this.password};
    this.servicioUsuario.login(this.usuario).subscribe(data => {
      localStorage.setItem('token', data.token); // a saber para qué es esto
      this.servicioUsuario.setToken(data.token);
      this.router.navigateByUrl('/');
      console.log(data.token);
    });
    //console.log(this.email);
    //console.log(this.password);
  }

}
