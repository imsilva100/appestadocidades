import  {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {SideNavInnerToolbarModule, SideNavOuterToolbarModule, SingleCardModule} from './layouts';
import {ChangePasswordFormModule, CreateAccountFormModule, FooterModule, LoginFormModule, ResetPasswordFormModule} from './shared/components';
import {AppInfoService, AuthService, ScreenService} from './shared/services';
import {UnauthenticatedContentModule} from './unauthenticated-content';
import {AppRoutingModule} from './app-routing.module';
import {ClientesComponent} from './shared/components/clientes/clientes.component';
import {ProdutosComponent} from './shared/components/produtos/produtos.component';
import {NotasComponent} from './shared/components/notas/notas.component';
import {ClientesService} from "./shared/services/clientes.service";
import {ProdutosService} from "./shared/services/produtos.service";
import {NotasService} from "./shared/services/notas.service";
import { ItensnotaComponent } from './shared/components/notas/itensnota/itensnota.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  DxDataGridModule,
  DxFormModule,
  DxLookupModule,
  DxMenuModule,
  DxSelectBoxModule,
  DxTreeListModule
} from "devextreme-angular";
import {EstadosCidadesService} from "./shared/services/estados-cidades.service";
import {HttpClientModule} from "@angular/common/http";
import {EstadosCidadesModule} from "./shared/components/estados-cidades/estados-cidades.component";

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ProdutosComponent,
    NotasComponent,
    ItensnotaComponent
  ],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    ResetPasswordFormModule,
    CreateAccountFormModule,
    ChangePasswordFormModule,
    LoginFormModule,
    UnauthenticatedContentModule,
    AppRoutingModule,
    HttpClientModule,
    DxDataGridModule,
    DxFormModule,
    DxLookupModule,
    DxSelectBoxModule,
    DxMenuModule,
    EstadosCidadesModule,
    DxTreeListModule
  ],
  providers: [
    AuthService,
    ScreenService,
    AppInfoService,
    EstadosCidadesService,
    ClientesService,
    ProdutosService,
    NotasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
