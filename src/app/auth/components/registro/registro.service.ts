import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { IRegistro } from './IRegistro';
import { environment } from 'src/environments/environment';

const BASE_URL: string = `${environment.baseUrls.server}${environment.baseUrls.v1ApiUrl}`;

@Injectable({
  providedIn: 'root',
})
export class RegistroService {
  constructor(private _http: HttpClient) {}

  getAll(): Observable<IRegistro[]> {
    return this._http.get<IRegistro[]>(`${BASE_URL}Registro`).pipe(take(1));
  }

  getById(id: number): Observable<IRegistro> {
    return this._http.get<IRegistro>(`${BASE_URL}Registro`).pipe(take(1));
  }

  create(Registro: IRegistro): Observable<any> {
    return this._http.post(`${BASE_URL}User`, Registro).pipe(take(1));
  }

  edit(Registro: IRegistro): Observable<any> {
    return this._http
      .put<any>(`${BASE_URL}Registro/${Registro.id}`, Registro)
      .pipe(take(1));
  }

  delete(id: number): Observable<any> {
    return this._http.delete<any>(`${BASE_URL}Registro/${id}`).pipe(take(1));
  }
}
