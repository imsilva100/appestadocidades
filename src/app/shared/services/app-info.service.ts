import { Injectable } from '@angular/core';

@Injectable()
export class AppInfoService {
  constructor() {}

  public get title() {
    return 'Lista de Estados e Cidades';
  }

  public get currentYear() {
    return new Date().getFullYear();
  }
}
