import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, take} from "rxjs";
import {Produto} from "../../models/produto";
import {Cliente} from "../../models/cliente";

const API = 'http://localhost:8080/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(API).pipe(take(1));
  }

  postProduto(produto: Produto): Observable<Produto[]>{
    return this.http.post<Produto[]>( `${API}/novo`, produto).pipe(take(1));
  }

  putProduto(produto: Produto, id: number): Observable<Produto[]>{
    return this.http.put<Produto[]>(`${API}/altera`, produto).pipe(take(1));
  }

  deleteProduto( id: number): Observable<Produto[]>{
    return this.http.delete<Produto[]>(`${API}/deleta/${id}`).pipe(take(1));
  }

}
