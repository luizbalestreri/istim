import { Observable } from 'rxjs';
import { UserService } from './../user/user.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

const BASE_URL: string = `${environment.baseUrls.server}${environment.baseUrls.v1ApiUrl}`;

export interface ILoginCredentials {
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  constructor(private _http: HttpClient, private _userService: UserService) {}

  authenticate(data: ILoginCredentials): Observable<any> {
    let url: string = `${BASE_URL}Auth/Authenticate`;

    return this._http.post(url, data, { observe: 'response' }).pipe(
      tap((res: any) => {
        const authToken: any = res.body.token;
        this._userService.setToken(authToken);
      })
    );
  }
}
