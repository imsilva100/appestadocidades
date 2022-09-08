import {Injectable} from '@angular/core';
import {Cliente} from "../../models/cliente";
import {delay, Observable, take, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

const API = 'http://localhost:8080/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) {  }

  getClientes(): Observable<Cliente[]> {
    return this.http
      .get<Cliente[]>(API)
      .pipe(take(1));
  }


  postCliente(cliente: Cliente): Observable<Cliente[]>{

    return this.http
      .post<Cliente[]>( `${API}/novo`, cliente).pipe(take(1));
    console.log(cliente);
  }
  putCliente(cliente: Cliente, _id: number): Observable<Cliente[]>{
    return this.http
      .put<Cliente[]>(`${API}/${_id}`, cliente)
      .pipe(take(1));
  }

  deleteCliente(_id: number): Observable<Cliente[]>{
    let temp = `${API}/${_id}`;
    return this.http
      .delete<Cliente[]>(`${API}/${_id}`)
      .pipe(take(1));
  }

  requestCliente(get: string) {

  }
}
