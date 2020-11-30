import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

//import { MatCardModule } from '@angular/material/card';
//import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './Components/login/login.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { UsuarioService } from './Services/usuario.service';
import { ListaTweetsComponent } from './Components/lista-tweets/lista-tweets.component';
import { TweetsService } from './Services/tweets.service';
import { HeaderComponent } from './Components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    ListaTweetsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSliderModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    FontAwesomeModule,
    MatGridListModule

  ],
  providers: [
    UsuarioService,
    TweetsService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
