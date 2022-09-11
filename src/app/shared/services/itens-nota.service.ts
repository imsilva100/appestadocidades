import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, take} from "rxjs";
import {ItensNota} from "../../models/itensNota";


const API = 'http://localhost:8080/notas';

@Injectable({
  providedIn: 'root'
})
export class ItensNotaService {

  constructor(private http: HttpClient) { }

  getItensNotaFiscalId(nota_id: number | undefined): Observable<ItensNota[]> {

    let itens: Observable<ItensNota[]>;

    itens = this.http.get<ItensNota[]>(`${API}/${nota_id}`)
      .pipe(take(1));

    console.log("Itens-Serviço: ", itens);
    return this.http
      .get<ItensNota[]>(`${API}/${nota_id}`)
      .pipe(take(1));
  }

  getItensNotasFiscais(): Observable<ItensNota[]> {
    return this.http
      .get<ItensNota[]>(API)
      .pipe(take(1));
  }

}
