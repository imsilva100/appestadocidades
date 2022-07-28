import { Component } from '@angular/core';
import {Estado} from "../../models/estado";
import {Cidade} from "../../models/cidade";

@Component({
  templateUrl: './estados-page.component.html'
})

export class EstadosPageComponent {
  constructor() {}

  varEstado: Estado | undefined;
  varCidade: Cidade | undefined;

}

