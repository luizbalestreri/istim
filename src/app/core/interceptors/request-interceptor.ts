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
  constructor(private tokenService: TokenService, private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.tokenService.hasToken()) {
      let token: any = this.tokenService.getToken();

      const authReq = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });

      return next.handle(authReq).pipe(
        catchError((error) => {
          if (error instanceof HttpErrorResponse)
            if (error.status === 401) this.router.navigateByUrl('/login');

          return throwError(error);
        })
      );
    }

    return next.handle(req);
  }
}
