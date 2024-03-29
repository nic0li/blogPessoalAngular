import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { RodapeComponent } from './component/rodape/rodape.component';
import { EntrarComponent } from './component/entrar/entrar.component';
import { CadastrarComponent } from './component/cadastrar/cadastrar.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { TemaComponent } from './component/tema/tema.component';
import { TemaEditComponent } from './component/edit/tema-edit/tema-edit.component';
import { TemaDeleteComponent } from './component/delete/tema-delete/tema-delete.component';
import { PublicacaoDeleteComponent } from './component/delete/publicacao-delete/publicacao-delete.component';
import { PublicacaoEditComponent } from './component/edit/publicacao-edit/publicacao-edit.component';
import { UsuarioEditComponent } from './component/edit/usuario-edit/usuario-edit.component';
import { AlertasComponent } from './component/alertas/alertas.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    EntrarComponent,
    CadastrarComponent,
    InicioComponent,
    TemaComponent,
    TemaEditComponent,
    TemaDeleteComponent,
    PublicacaoDeleteComponent,
    PublicacaoEditComponent,
    UsuarioEditComponent,
    AlertasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    OrderModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
