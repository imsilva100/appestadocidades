import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, take} from "rxjs";
import {Produto} from "../../models/produto";

const API = 'http://localhost:8080/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  requestProduto(metodo: string, produto?: Produto, id?: any){
    let result: Observable<Produto[]> | undefined;
    switch (metodo) {
      case 'GET':
        result = this.http.get<Produto[]>(API);
        break;
      case 'POST':
        console.log(produto);
        result = this.http.post<Produto[]>(`${API}/novo`, produto)
        break;
      case 'PUT':
        result = this.http.put<Produto[]>(`${API}/altera`, produto)
        break;
      case 'DELETE':
        result = this.http.delete<Produto[]>(`${API}/deleta/${id}`)
        console.log(result);
        break;
    }
    if(result) {
      return result.pipe(take(1));
    }
    return;
  }
}
