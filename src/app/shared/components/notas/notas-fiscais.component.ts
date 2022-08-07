import {Component, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NotasService} from "../../services/notas.service";
import {DxDataGridComponent} from "devextreme-angular";
import {Observable} from "rxjs";
import {Cliente} from "../../../models/cliente";
import {ClientesService} from "../../services/clientes.service";
import {Nota} from "../../../models/nota";

@Component({
  selector: 'app-notas',
  templateUrl: './notas-fiscais.component.html',
  styleUrls: ['./notas-fiscais.component.scss']
})
export class NotasFiscaisComponent implements OnInit {

  @ViewChild (DxDataGridComponent , { static : false }) dataGrid : DxDataGridComponent | undefined

  notasFiscais: Nota[] = [];
  clientes: Cliente[] = [];

  captionDetalhe: string = 'Cabeçalho do detalhe';



  constructor(
    private notasFiscaisService: NotasService,
    private clienteService: ClientesService) { }

  ngOnInit(): void {

    this.notasFiscaisService.requestNotasFiscais('GET')?.subscribe({
      next: value => this.notasFiscais = value})

    this.clienteService.requestCliente('GET')?.subscribe({
      next: value => {this.clientes = value; console.log(this.clientes)}})
  }

  onSaved($event: any) {
    let result: Observable<Nota[]> | undefined;

    if($event.changes.length !== 0) {

      let data = $event.changes[0].data;
      let idNotaFiscal = $event.changes[0].key

      switch ($event.changes[0].type) {

        case 'insert':

          console.log(data);

          result = this.notasFiscaisService.requestNotasFiscais('POST', data);
          break;

        case 'update':
          result = this.notasFiscaisService.requestNotasFiscais('PUT', data, data.id);
          break;

        case 'remove':
          result = this.notasFiscaisService.requestNotasFiscais('DELETE', idNotaFiscal);
          break

      }
      if(result) {
        result?.subscribe({
          next: () => console.log,
          error: err => console.log(err),
          complete: () => console.log
        })
        this.dataGrid?.instance.refresh();
      }
    }
  }

  getClienteNome(item: any) {
    if (!item) {
      return '';
    }

    return `${item.id} ${item.nome}`;
  }


}

