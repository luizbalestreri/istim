import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { IRegistro } from 'src/app/auth/components/registro/IRegistro';
import { environment } from 'src/environments/environment';
import { IUserInfo } from './interfaces/IUserInfo';

const BASE_URL: string = `${environment.baseUrls.server}${environment.baseUrls.v1ApiUrl}`;

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private _http: HttpClient) {}

  getById(id: string): Observable<IUserInfo> {
    return this._http.get<IUserInfo>(`${BASE_URL}User/${id}`).pipe(take(1));
  }

  create(user: IRegistro): Observable<any> {
    return this._http.post(`${BASE_URL}User`, user).pipe(take(1));
  }
}
