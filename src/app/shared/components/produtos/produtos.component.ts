import {Component, OnInit, ViewChild} from '@angular/core';
import {Produto} from "../../../models/produto";
import {ProdutosService} from "../../services/produtos.service";
import {DxDataGridComponent} from "devextreme-angular";

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  @ViewChild (DxDataGridComponent , { static : false }) dataGrid : DxDataGridComponent | undefined
  produtos: Produto[] = [];

  constructor(private produtosService: ProdutosService ) {}

  ngOnInit(): void {
    this.produtosService.getProdutos().subscribe({
      next: value => this.produtos = value,
      error: err => console.log('ERRO: ', err),
      complete: () => {}
    });

  }
  onSaved($event: any){
    if($event.changes[0].type == 'insert'){
      $event.changes[0].data.id = null;

      this.produtosService.postProduto($event.changes[0].data).subscribe({
        next: () => console.log,
        error: err => console.log(err),
        complete: () => console.log
      })
    }else if($event.changes[0].type == 'update') {

      this.produtosService.putProduto($event.changes[0].data, $event.changes[0].data).subscribe({
        next: () => console.log,
        error: err => console.log(err),
        complete: () => console.log
      })

    }else if($event.changes[0].type == 'remove') {
      this.produtosService.deleteProduto($event.changes[0].key).subscribe({
        next: () => console.log,
        error: err => console.log(err),
        complete: () => console.log
      })
    }

  }

}
