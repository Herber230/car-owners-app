import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonLayoutComponent } from './common-pages/common-layout/common-layout.component';
import { LoginComponent } from './common-pages/login/login.component';

import { AuthService } from './common-pages/services/auth.service';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'owners',
    component: CommonLayoutComponent,
    canActivate: [AuthService],
    loadChildren: () =>
      import('./car-owners/car-owners.module').then((m) => m.CarOwnersModule),
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
