import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUserTokenDecoded } from '../token/interfaces/IUserTokenDecoded';
import { TokenService } from '../token/token.service';

@Injectable({ providedIn: 'root' })
export class UserService {
  userRole: string = '';

  constructor(private _tokenService: TokenService, private _router: Router) {
    this._tokenService.hasToken() && this.decodeUserToken();
  }

  setToken(token: string): void {
    this._tokenService.setToken(token);
    this.decodeUserToken();
  }

  logout(): void {
    this._tokenService.removeToken();
    this._router.navigate(['/']);
  }

  isLogged(): boolean {
    return this._tokenService.hasToken();
  }

  isAdmin(): boolean {
    return 'ADMIN' === this.userRole;
  }

  private decodeUserToken(): void {
    const token = this._tokenService.getToken();

    const user: IUserTokenDecoded = this.decode(token);
    this.userRole = user.role;
  }

  private decode(token: string): any {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch {
      console.error(`Nao foi possivel decodificar o token`);
    }
  }
}
