import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CommonLayoutComponent } from './common-layout/common-layout.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


import { MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card'; 
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

const MaterialModules = [
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule
]

@NgModule({
  declarations: [
    LoginComponent,
    CommonLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ...MaterialModules
  ]
})
export class CommonPagesModule { }
