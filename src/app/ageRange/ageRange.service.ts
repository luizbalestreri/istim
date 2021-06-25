import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { IAgeRange } from './Interfaces/IAgeRange';
import { environment } from 'src/environments/environment';

const BASE_URL: string = `${environment.baseUrls.server}${environment.baseUrls.v1ApiUrl}`;

@Injectable({
  providedIn: 'root',
})
export class AgeRangeService {
  constructor(private _http: HttpClient) {}

  getAll(): Observable<IAgeRange[]> {
    return this._http.get<IAgeRange[]>(`${BASE_URL}AgeRange`).pipe(take(1));
  }

  getById(id: number): Observable<IAgeRange> {
    return this._http.get<IAgeRange>(`${BASE_URL}AgeRange/${id}`).pipe(take(1));
  }

  create(ageRange: IAgeRange): Observable<any> {
    return this._http.post(`${BASE_URL}AgeRange`, ageRange).pipe(take(1));
  }

  edit(ageRange: IAgeRange): Observable<any> {
    return this._http
      .put<any>(`${BASE_URL}AgeRange/${ageRange.id}`, ageRange)
      .pipe(take(1));
  }

  delete(id: number): Observable<any> {
    return this._http.delete<any>(`${BASE_URL}AgeRange/${id}`).pipe(take(1));
  }
}
