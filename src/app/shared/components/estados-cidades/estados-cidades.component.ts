import {Component, EventEmitter, Input, NgModule, OnDestroy, OnInit, Output} from '@angular/core';
import {EstadosCidadesService} from "../../services/estados-cidades.service";
import {Estado} from "../../../models/estado";
import {Cidade} from "../../../models/cidade";
import {DxSelectBoxModule} from "devextreme-angular";

@Component({
  selector: 'estados-cidades',
  templateUrl: './estados-cidades.component.html',
  styleUrls: ['./estados-cidades.component.scss'],
  providers: [EstadosCidadesService]
})
export class EstadosCidadesComponent implements OnInit, OnDestroy {

  estados: Estado[] = [];
  cidades: Cidade[] = [];


  @Input()
  labelEstado: string = "Estado";

  @Input()
  estado: Estado | undefined;

  @Input()
  cidade: Cidade | undefined;

  @Output()
  estadoChange: EventEmitter<Estado> = new EventEmitter<Estado>();

  @Output()
  cidadeChange: EventEmitter<Cidade> = new EventEmitter<Cidade>();

  constructor(private service: EstadosCidadesService) {
  }

  ngOnInit(): void {
    this.service.getUf()
      .subscribe({
        next: listaEstados => {
          this.estados = listaEstados
        },
        error: err => console.log(err),
        complete: () => {}
      });
  }

  onValueChangeEstado(value: any) {
    this.estadoChange?.emit(value.value)
    this.cidadeChange?.emit(undefined)
    this.service.getMunicipios(value.value.sigla)
      .subscribe({
        next: listaCidades => {
          this.cidades = listaCidades
        },
        error: err => console.log(err),
        complete: () => {}
      });
  }

  onValueChangeCidade(value: any) {
    this.cidadeChange?.emit(value.value)
  }

  getEstados(item: Estado) {
    if (item) {
      return `${item.sigla} - ${item.nome}`;
    }
    return item;
  }

  getCidades(item: Cidade) {
    if (item) {
      return item.nome;
    }
    return item;
  }

  ngOnDestroy(): void {

  }


}

@NgModule({
  imports: [ DxSelectBoxModule],
  declarations: [ EstadosCidadesComponent ],
  exports: [ EstadosCidadesComponent ]
})
export class EstadosCidadesModule { }
