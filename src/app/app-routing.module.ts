import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerListComponent } from './car-owners/owner-list/owner-list.component';
import { OwnerSingleViewComponent } from './car-owners/owner-single-view/owner-single-view.component';
import { CommonLayoutComponent } from './common-pages/common-layout/common-layout.component';
import { LoginComponent } from './common-pages/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'owners',
    component: CommonLayoutComponent,
    loadChildren: () =>
      import('./car-owners/car-owners.module').then((m) => m.CarOwnersModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
