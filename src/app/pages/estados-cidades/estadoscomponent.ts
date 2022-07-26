import { Component } from '@angular/core';
import {Estado} from "../../models/estado";
import {Cidade} from "../../models/cidade";

@Component({
  templateUrl: 'home.component.html',
  styleUrls: [ './home.component.scss' ]
})

export class HomeComponent {
  constructor() {}

  varEstado: Estado | undefined;
  varCidade: Cidade | undefined;

}

