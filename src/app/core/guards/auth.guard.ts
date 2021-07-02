import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
  CanLoad,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user/user-info.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private _userService: UserService, private _router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | import('@angular/router').UrlTree> {
    if (!this._userService.isLogged()) {
      this._router.navigate(['login']);
      return false;
    }

    return true;
  }
}
