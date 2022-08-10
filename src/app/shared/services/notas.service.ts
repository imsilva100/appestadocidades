import { Injectable } from '@angular/core';
import {Observable, take} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Nota} from "../../models/nota";
import {Produto} from "../../models/produto";

const API = 'http://localhost:8080/notas';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  constructor(private http: HttpClient) { }

  requestNotasFiscais(metodo: string, notaFiscal?: Nota, id?: any) {
    let result: Observable<Nota[]> | undefined;

    switch (metodo) {
      case 'GET':
        result = this.http.get<Nota[]>(API);
        console.log(notaFiscal);
        break
      case 'POST':
        result = this.http.post<Nota[]>(API, notaFiscal);
        break;
      case 'PUT':
        result = this.http.put<Nota[]>(`${API}/${id}`, notaFiscal);
        break;
      case 'DELETE':
        result = this.http.delete<Nota[]>(`${API}/deleta/${id}`);
        break;
    }
    if (result) {
      return result.pipe(take(1));
    }
    return;
  }

}
