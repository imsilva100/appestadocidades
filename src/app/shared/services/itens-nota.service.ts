import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, take} from "rxjs";
import {ItensNota} from "../../models/itens-nota";


const API = 'http://localhost:8080/itensNotaFiscal';

@Injectable({
  providedIn: 'root'
})
export class ItensNotaService {

  constructor(private http: HttpClient) { }

  getItensNotaFiscalId(id: number | undefined): Observable<ItensNota[]> {
    return this.http
      .get<ItensNota[]>(`${API}/${id}`)
      .pipe(take(1));
  }

  getItensNotasFiscais(): Observable<ItensNota[]> {
    return this.http
      .get<ItensNota[]>(API)
      .pipe(take(1));
  }

}
