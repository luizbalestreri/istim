import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IPagedList } from '../shared/interfaces/IPagedList';
import { IUserGame } from './interfaces/IUserGame';

const BASE_URL: string = `${environment.baseUrls.server}${environment.baseUrls.v1ApiUrl}`;

@Injectable({
  providedIn: 'root',
})
export class UserGameService {
  constructor(private _http: HttpClient) {}

  getAll(): Observable<IPagedList<IUserGame>> {
    return this._http
      .get<IPagedList<IUserGame>>(`${BASE_URL}UserGame`)
      .pipe(take(1));
  }

  getById(id: number): Observable<IUserGame> {
    return this._http.get<IUserGame>(`${BASE_URL}UserGame/${id}`).pipe(take(1));
  }

  create(game: IUserGame): Observable<any> {
    return this._http.post(`${BASE_URL}UserGame`, game).pipe(take(1));
  }

  edit(game: IUserGame): Observable<any> {
    return this._http
      .put<any>(`${BASE_URL}UserGame/${game.id}`, game)
      .pipe(take(1));
  }

  delete(id: number): Observable<any> {
    return this._http.delete<any>(`${BASE_URL}UserGame/${id}`).pipe(take(1));
  }
}
