import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { LoginComponent } from "./Components/login/login.component";
import { RegistroComponent } from "./Components/registro/registro.component";
import { ListaTweetsComponent } from './Components/lista-tweets/lista-tweets.component';
import { CrearTweetComponent } from './Components/crear-tweet/crear-tweet.component';

const routes: Routes = [
  { path: "", component: LoginComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "registro", component: RegistroComponent, pathMatch: "full" },
  { path: "tweets", component: ListaTweetsComponent, pathMatch: "full" },
  { path: "tweets/new", component: CrearTweetComponent, pathMatch: "full" }  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
