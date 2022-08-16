import {Injectable} from '@angular/core';
import {Cliente} from "../../models/cliente";
import {Observable, take} from "rxjs";
import {HttpClient} from "@angular/common/http";

const API = 'http://localhost:8080/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) {
  }

  requestCliente(metodo: string, cliente?: Cliente, id?: any){
    let result: Observable<Cliente[]> | undefined;
    switch (metodo) {
      case 'GET':
        result = this.http.get<Cliente[]>(API);
        break;
      case 'POST':
        result = this.http.post<Cliente[]>(`${API}/novo`, cliente)
        break;
      case 'PUT':
        result = this.http.put<Cliente[]>(`${API}/altera`, cliente)
        break;
      case 'DELETE':
        result = this.http.delete<Cliente[]>(`${API}/deleta/${id}`)
        break;
    }
    if(result) {
      return result.pipe(take(1));
    }
    return;
  }
}
/*
getNotasFiscais(): Observable<NotaFiscal[]> {
return this.http
.get<NotaFiscal[]>(API)
.pipe(take(1));
}

postNotaFiscal(notaFiscal: NotaFiscal): Observable<NotaFiscal[]>{
return this.http
.post<NotaFiscal[]>(API, notaFiscal)
.pipe(take(1));
}
putNotaFiscal(notaFiscal: NotaFiscal, id: number): Observable<NotaFiscal[]>{
return this.http
.put<NotaFiscal[]>(`${API}/${id}`, notaFiscal)
.pipe(take(1));
}

deleteNotaFiscal(id: number): Observable<NotaFiscal[]>{
let temp = `${API}/${id}`;
return this.http
.delete<NotaFiscal[]>(`${API}/${id}`)
.pipe(take(1));
}
*/
