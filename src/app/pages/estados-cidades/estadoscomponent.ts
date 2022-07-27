import { Component } from '@angular/core';
import {Estado} from "../../models/estado";
import {Cidade} from "../../models/cidade";

@Component({
  templateUrl: 'home.component.html',
  styleUrls: [ './home.component.scss' ]
})

export class EstadoCidades {
  constructor() {}

  varEstado: Estado | undefined;
  varCidade: Cidade | undefined;

}

