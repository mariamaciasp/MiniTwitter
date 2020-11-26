import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

//import { MatCardModule } from '@angular/material/card';
//import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './Components/login/login.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { UsuarioService } from './Services/usuario.service';
import { ListaTweetsComponent } from './Components/lista-tweets/lista-tweets.component';
import { TweetsService } from './Services/tweets.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    ListaTweetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [
    UsuarioService,
    TweetsService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
