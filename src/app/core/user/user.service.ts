import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../token/token.service';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private tokenService: TokenService, private router: Router) {}

  setToken(token: string): void {
    this.tokenService.setToken(token);
  }

  logout(): void {
    this.tokenService.removeToken();
    this.router.navigate(['/']);
  }

  isLogged(): boolean {
    return this.tokenService.hasToken();
  }
}
