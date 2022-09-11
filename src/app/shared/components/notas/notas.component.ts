import {Component, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NotasService} from "../../services/notas.service";
import {DxDataGridComponent} from "devextreme-angular";
import {Observable} from "rxjs";
import {Cliente} from "../../../models/cliente";
import {ClientesService} from "../../services/clientes.service";
import {NotaFiscal} from "../../../models/notaFiscal";
import {ItensNotaService} from "../../services/itens-nota.service";
import {ItensNota} from "../../../models/itensNota";

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.scss']
})
export class NotasComponent implements OnInit {

  @ViewChild (DxDataGridComponent , { static : false }) dataGrid : DxDataGridComponent | undefined

  notasFiscais: NotaFiscal[] = [];
  clientes: Cliente[] = [];
  itensNota: ItensNota[] = [];

  constructor(
    private notasFiscaisService: NotasService,
    private clienteService: ClientesService,
    private itensNotaService: ItensNotaService) { }

  ngOnInit(): void {
    this.notasFiscaisService.getNotas().subscribe({
      next: value => this.notasFiscais = value,
      error: err => console.log('ERRO: ', err),
      complete: () => {}
    });

    this.clienteService.getClientes().subscribe({
      next: value => this.clientes = value,
      error: err => console.log('ERRO: ', err),
      complete: () => {}
    });

  }

  onSaved($event: any){
    if($event.changes[0].type == 'insert'){
      $event.changes[0].data.id = null;

      this.notasFiscaisService.postNota($event.changes[0].data).subscribe({
        next: () => console.log,
        error: err => console.log(err),
        complete: () => console.log
      })
    }else if($event.changes[0].type == 'update') {

      this.notasFiscaisService.putNota($event.changes[0].data, $event.changes[0].data).subscribe({
        next: () => console.log,
        error: err => console.log(err),
        complete: () => console.log
      })

    }else if($event.changes[0].type == 'remove') {
      this.notasFiscaisService.deleteNota($event.changes[0].key).subscribe({
        next: () => console.log,
        error: err => console.log(err),
        complete: () => console.log
      })
    }

  }


  /*onSaved($event: any) {
    let result: Observable<NotaFiscal[]> | undefined;

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
  }*/

  getClienteNome(item: any) {
    if (!item) {
      return '';
    }

    return `${item.id} ${item.nome}`;
  }


  onEditingStart(e: any) {
    this.itensNotaService.getItensNotaFiscalId(e.data.id).subscribe({
      next: value => this.itensNota })
  }

  editorPreparing(e: any) {
    this.itensNotaService.getItensNotaFiscalId(e.data.id).subscribe({
      next: value => this.itensNota })
  }

  initNewRow(e: any) {
    this.itensNotaService.getItensNotaFiscalId(e.data.id).subscribe({
      next: value => this.itensNota })
  }
}

