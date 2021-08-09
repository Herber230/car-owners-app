import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { LoginService } from '../services/login.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  private _loginError?: string;

  private _userChangeSubscription?: Subscription;
  private _passwordChangeSubscription?: Subscription;

  constructor(
    private loginService: LoginService,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      user: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });

    const cleanSubscriber = {
      next: () => this.cleanError(),
    };
    this._userChangeSubscription = this.loginForm
      .get('user')
      ?.valueChanges.subscribe(cleanSubscriber);
    this._passwordChangeSubscription = this.loginForm
      .get('password')
      ?.valueChanges.subscribe(cleanSubscriber);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this._userChangeSubscription?.unsubscribe();
    this._passwordChangeSubscription?.unsubscribe();
  }

  onSubmit() {
    this.loginService
      .authenticate(
        this.loginForm.get('user')?.value,
        this.loginForm.get('password')?.value
      )
      .subscribe({
        next: (result) => {
          if (result.success) {
            this.authService.accessToken = result.token;
            this.authService.refreshToken = result.refreshToken;
            this.router.navigate(['car-owners', 'personas']);
          } else {
            this.setError('Usuario o contraseña invalidos');
          }
        },
        error: () => {
          this.setError('Error de la aplicacion');
        },
      });
  }

  setError(message: string) {
    this.loginForm.get('user')?.setValue('');
    this.loginForm.get('password')?.setValue('');
    this._loginError = message;
  }

  cleanError() {
    this._loginError = '';
  }

  get loginError() {
    return this._loginError;
  }

  get user() {
    return this.loginForm.get('user')?.value;
  }

  get password() {
    return this.loginForm.get('password')?.value;
  }
}
