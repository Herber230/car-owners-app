import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CommonLayoutComponent } from './common-layout/common-layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginComponent,
    CommonLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CommonPagesModule { }
