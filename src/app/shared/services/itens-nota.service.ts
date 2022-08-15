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

  getItensNotaFiscalId(id: number | undefined): Observable<Itens_nota[]> {
    return this.http
      .get<Itens_nota[]>(`${API}/${id}`)
      .pipe(take(1));
  }

  getItensNotasFiscais(): Observable<Itens_nota[]> {
    return this.http
      .get<Itens_nota[]>(API)
      .pipe(take(1));
  }

}
