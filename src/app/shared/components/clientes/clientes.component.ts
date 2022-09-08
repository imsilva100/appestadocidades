import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Cliente} from "../../../models/cliente";
import {ClientesService} from "../../services/clientes.service";
import {DxDataGridComponent, DxFormComponent} from "devextreme-angular";
import {Observable, take} from "rxjs";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  @ViewChild (DxDataGridComponent , { static : false }) dataGrid : DxDataGridComponent | undefined

  clientes: Cliente[] = [];

  submitted = false;

  operacoesRemotas: any = {
    filtering: true,
    grouping: true,
    groupPaging: true,
    paging: true,
    sorting: true,
    summary: true
  }

  constructor(private clienteService: ClientesService) {}

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe({
      next: value => this.clientes = value,
      error: err => console.log('ERRO: ', err),
      complete: () => {}
    });

  }

  /*onSaved($event: any){
    let result: Observable<Cliente[]> | undefined;
    if($event.changes[0].type == 'insert') {
      $event.changes[0].data.id = null;
      // result =
      this.clienteService.postCliente($event.changes[0].data).subscribe({
        next: () => console.log,
        error: err => console.log(err),
        complete: () => console.log
      });
    }
    if($event.changes[0].type == 'update'){

    }

    if($event.changes[0].type == 'delete'){

    }
    this.dataGrid?.instance.refresh();
  }*/

  onSaved($event: any){
    $event.changes[0].data.id = null;
    this.clienteService.postCliente($event.changes[0].data).subscribe({
      next: () => console.log,
      error: err => console.log(err),
      complete: () => console.log
    }

    )
  }

}
