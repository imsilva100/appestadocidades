import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, take} from "rxjs";
import {Estado} from "../../models/estado";
import {Cidade} from "../../models/cidade";

@Injectable({
  providedIn: 'root'
})
export class EstadosCidadesService {

  constructor(private http: HttpClient) { }

  getUf(): Observable<Estado[]>{
    return this.http
      .get<Estado[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
      .pipe(take(1));
  }

  getMunicipios(sigla: string): Observable<Cidade[]> {
    return this.http
      .get<Cidade[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${sigla}/municipios`)
      .pipe(take(1));

  }



}
