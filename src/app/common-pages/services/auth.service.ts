import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

const ACCESS_TOKEN = 'accessToken';
const REFRESH_TOKEN = 'refreshToken';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements CanActivate {
  constructor(private router: Router) {}

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
