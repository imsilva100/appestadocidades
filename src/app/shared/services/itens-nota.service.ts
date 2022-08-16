import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, take} from "rxjs";
import {Itens_nota} from "../../models/itens_nota";


const API = 'http://localhost:8080/notas';

@Injectable({
  providedIn: 'root'
})
export class ItensNotaService {

  constructor(private http: HttpClient) { }

  getItensNotaFiscalId(nota_id: number | undefined): Observable<Itens_nota[]> {

    let itens: Observable<Itens_nota[]>;

    itens = this.http.get<Itens_nota[]>(`${API}/${nota_id}`)
      .pipe(take(1));

    console.log("Itens-Serviço: ", itens);
    return this.http
      .get<Itens_nota[]>(`${API}/${nota_id}`)
      .pipe(take(1));
  }

  getItensNotasFiscais(): Observable<Itens_nota[]> {
    return this.http
      .get<Itens_nota[]>(API)
      .pipe(take(1));
  }

}
