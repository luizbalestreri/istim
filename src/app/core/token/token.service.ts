import { Injectable } from '@angular/core';

const KEY = 'authToken';

@Injectable({ providedIn: 'root' })
export class TokenService {
  hasToken(): boolean {
    return !!this.getToken();
  }

  setToken(token: string): void {
    localStorage.setItem(KEY, token);
  }

  getToken(): any {
    return localStorage.getItem(KEY);
  }

  removeToken(): void {
    localStorage.removeItem(KEY);
  }
}
