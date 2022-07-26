import { Component, HostBinding } from '@angular/core';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import {EstadosCidadesComponent} from "./shared/components/estados-cidades/estados-cidades.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  nomeEstado: string = 'Nenhum';
  nomeCidade: string = 'Nenhuma';


  @HostBinding('class') get getClass() {
    return Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
  }

  constructor(
    private authService: AuthService,
    private screen: ScreenService,
    public appInfo: AppInfoService) { }

  isAuthenticated() {
    return this.authService.loggedIn;
  }


}
