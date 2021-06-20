import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { IGame } from './interfaces/IGame';
import { environment } from 'src/environments/environment';
import { IPagedList } from '../shared/interfaces/IPagedList';

const BASE_URL: string = `${environment.baseUrls.server}${environment.baseUrls.v1ApiUrl}`;

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private _http: HttpClient) {}

  getAll(): Observable<IPagedList<IGame>> {
    return this._http.get<IPagedList<IGame>>(`${BASE_URL}Game`).pipe(take(1));
  }

  getById(id: number): Observable<IGame> {
    return this._http.get<IGame>(`${BASE_URL}Game/${id}`).pipe(take(1));
  }

  create(game: IGame): Observable<any> {
    return this._http.post(`${BASE_URL}Game`, game).pipe(take(1));
  }

  edit(game: IGame): Observable<any> {
    return this._http
      .put<any>(`${BASE_URL}Game/${game.id}`, game)
      .pipe(take(1));
  }

  delete(id: number): Observable<any> {
    return this._http.delete<any>(`${BASE_URL}Game/${id}`).pipe(take(1));
  }
}
