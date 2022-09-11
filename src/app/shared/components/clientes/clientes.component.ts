import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Cliente} from "../../../models/cliente";
import {ClientesService} from "../../services/clientes.service";
import {DxDataGridComponent, DxFormComponent} from "devextreme-angular";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})

export class ClientesComponent implements OnInit {

  @ViewChild (DxDataGridComponent , { static : false }) dataGrid : DxDataGridComponent | undefined

  clientes: Cliente[] = [];

  submitted = false;

  constructor(private clienteService: ClientesService) {}

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe({
      next: value => this.clientes = value,
      error: err => console.log('ERRO: ', err),
      complete: () => {}
    });

  }

  onSaved($event: any){
        if($event.changes[0].type == 'insert'){
            $event.changes[0].data.id = null;

          this.clienteService.postCliente($event.changes[0].data).subscribe({
              next: () => console.log,
              error: err => console.log(err),
              complete: () => console.log
          })
        }else if($event.changes[0].type == 'update') {

          this.clienteService.putCliente($event.changes[0].data, $event.changes[0].data).subscribe({
            next: () => console.log,
            error: err => console.log(err),
            complete: () => console.log
          })

        }else if($event.changes[0].type == 'remove') {
          this.clienteService.deleteCliente($event.changes[0].key).subscribe({
            next: () => console.log,
            error: err => console.log(err),
            complete: () => console.log
          })
        }

  }

}
