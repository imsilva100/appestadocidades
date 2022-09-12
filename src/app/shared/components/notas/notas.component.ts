import {Component, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NotasService} from "../../services/notas.service";
import {DxDataGridComponent} from "devextreme-angular";
import {Cliente} from "../../../models/cliente";
import {ClientesService} from "../../services/clientes.service";
import {NotaFiscal} from "../../../models/notaFiscal";
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
    private clienteService: ClientesService) { }

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

  getClienteNome(item: any) {
    if (!item) {
      return '';
    }

    return `${item.id} ${item.nome}`;
  }


  onEditingStart(e: any) {
    this.notasFiscaisService.getItensNotaFiscalId(e.data.id).subscribe({
      next: value => this.itensNota })
  }

  editorPreparing(e: any) {
    this.notasFiscaisService.getItensNotaFiscalId(e.data.id).subscribe({
      next: value => this.itensNota })
  }

  initNewRow(e: any) {
    this.notasFiscaisService.getItensNotaFiscalId(e.data.id).subscribe({
      next: value => this.itensNota })
  }
}

