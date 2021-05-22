import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { ICategory } from './Interfaces/ICategory';
import { environment } from 'src/environments/environment';

const BASE_URL: string = `${environment.baseUrls.server}${environment.baseUrls.v1ApiUrl}`;

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private _http: HttpClient) {}

  getAll(): Observable<ICategory[]> {
    return this._http.get<ICategory[]>(`${BASE_URL}Category`).pipe(take(1));
  }

  getById(id: number): Observable<ICategory> {
    return this._http.get<ICategory>(`${BASE_URL}Category`).pipe(take(1));
  }

  create(category: ICategory): Observable<any> {
    return this._http.post(`${BASE_URL}Category`, category).pipe(take(1));
  }

  edit(category: ICategory): Observable<any> {
    return this._http
      .put<any>(`${BASE_URL}Category/${category.id}`, category)
      .pipe(take(1));
  }

  delete(id: number): Observable<any> {
    return this._http.delete<any>(`${BASE_URL}Category/${id}`).pipe(take(1));
  }
}
