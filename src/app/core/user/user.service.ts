import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUserTokenDecoded } from '../token/interfaces/IUserTokenDecoded';
import { TokenService } from '../token/token.service';
import { IUserLoggedInfo } from './IUserLoggedInfo';

@Injectable({ providedIn: 'root' })
export class UserService {
  user$: BehaviorSubject<IUserLoggedInfo> =
    new BehaviorSubject<IUserLoggedInfo>({
      role: '',
      username: '',
      email: '',
    });

  constructor(private _tokenService: TokenService, private _router: Router) {
    this._tokenService.hasToken() && this.decodeUserToken();
  }

  getUser(): Observable<IUserLoggedInfo> {
    return this.user$.asObservable();
  }

  setToken(token: string): void {
    this._tokenService.setToken(token);
    this.decodeUserToken();
  }

  logout(): void {
    this._tokenService.removeToken();
    this.user$.next({
      role: '',
      username: '',
      email: '',
    });
    this._router.navigate(['/']);
  }

  isLogged(): boolean {
    return this._tokenService.hasToken();
  }

  isAdmin(): boolean {
    return 'ADMIN' === this.user$.getValue().role;
  }

  private decodeUserToken(): void {
    const token = this._tokenService.getToken();

    const user: IUserTokenDecoded = this.decode(token);
    this.user$.next({
      username: user.unique_name,
      role: user.role,
      email: user.email,
    });
  }

  private decode(token: string): any {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch {
      console.error(`Nao foi possivel decodificar o token`);
    }
  }
}
