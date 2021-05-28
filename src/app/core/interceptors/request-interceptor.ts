import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TokenService } from './../token/token.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(private _tokenService: TokenService, private _router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this._tokenService.hasToken()) {
      let token: any = this._tokenService.getToken();

      const authReq = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });

      return next.handle(authReq).pipe(
        catchError((error) => {
          if (error instanceof HttpErrorResponse)
            if (error.status === 401) this._router.navigateByUrl('/login');

          return throwError(error);
        })
      );
    }

    return next.handle(req);
  }
}
