import { Injectable } from '@angular/core';
import {Observable, take} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {NotaFiscal} from "../../models/notaFiscal";
import {Cliente} from "../../models/cliente";

const API = 'http://localhost:8080/notas';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  constructor(private http: HttpClient) { }
  getNotas(): Observable<NotaFiscal[]> {
    return this.http.get<NotaFiscal[]>(API).pipe(take(1));
  }

  postNota(nota: NotaFiscal): Observable<NotaFiscal[]>{
    return this.http.post<NotaFiscal[]>( `${API}/nova`, nota).pipe(take(1));
  }

  putNota(nota: NotaFiscal, id: number): Observable<NotaFiscal[]>{
    return this.http.put<NotaFiscal[]>(`${API}/altera`, nota).pipe(take(1));
  }

  deleteNota( id: number): Observable<NotaFiscal[]>{
    return this.http.delete<NotaFiscal[]>(`${API}/deleta/${id}`).pipe(take(1));
  }

}
