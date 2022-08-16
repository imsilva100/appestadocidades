import { Injectable } from '@angular/core';
import {Observable, take} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Nota_fiscal} from "../../models/nota_fiscal";

const API = 'http://localhost:8080/notas';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  constructor(private http: HttpClient) { }

  requestNotasFiscais(metodo: string, notaFiscal?: Nota_fiscal, id?: any) {
    let result: Observable<Nota_fiscal[]> | undefined;

    switch (metodo) {
      case 'GET':
        result = this.http.get<Nota_fiscal[]>(API);
        console.log(result);
        break
      case 'POST':
        result = this.http.post<Nota_fiscal[]>(API, notaFiscal);
        break;
      case 'PUT':
        result = this.http.put<Nota_fiscal[]>(`${API}/${id}`, notaFiscal);
        break;
      case 'DELETE':
        result = this.http.delete<Nota_fiscal[]>(`${API}/deleta/${id}`);
        break;
    }
    if (result) {
      return result.pipe(take(1));
    }
    return;
  }
}
