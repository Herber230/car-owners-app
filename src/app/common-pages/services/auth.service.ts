import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

const ACCESS_TOKEN = 'accessToken';
const REFRESH_TOKEN = 'refreshToken';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements CanActivate, HttpInterceptor {
  constructor(private router: Router) {}
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(this.addToken(req));
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const isAuthenticated = this.accessToken != null;
    if (!isAuthenticated) {
      this.router.navigate(['login']);
    }

    return isAuthenticated;
  }

  addToken(req: HttpRequest<any>): HttpRequest<any> {
    return req.clone({setHeaders: {
      Authorization: `Bearer ${this.accessToken}`
    }})
  }

  get accessToken() {
    return localStorage.getItem(ACCESS_TOKEN);
  }
  set accessToken(value: string | null) {
    if (value) localStorage.setItem(ACCESS_TOKEN, value);
  }

  get refreshToken() {
    return localStorage.getItem(REFRESH_TOKEN);
  }
  set refreshToken(value: string | null) {
    if (value) localStorage.setItem(REFRESH_TOKEN, value);
  }
}
