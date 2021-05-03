import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './component/cadastrar/cadastrar.component';
import { EntrarComponent } from './component/entrar/entrar.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { TemaComponent } from './component/tema/tema.component';

const routes: Routes = [

  {path: "", redirectTo: "entrar", pathMatch: "full"},

  {path: "entrar", component: EntrarComponent},
  {path: "cadastrar", component: CadastrarComponent},
  {path: "inicio", component: InicioComponent},
  {path: "tema", component: TemaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
