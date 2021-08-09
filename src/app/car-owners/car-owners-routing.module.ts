import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { CarSingleViewComponent } from './car-single-view/car-single-view.component';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnerSingleViewComponent } from './owner-single-view/owner-single-view.component';

const routes: Routes = [
  { path: 'personas', component: OwnerListComponent },
  {
    path: 'personas/:id',
    component: OwnerSingleViewComponent,
  },
  { path: 'automoviles', component: CarListComponent },
  {
    path: 'automoviles/:id',
    component: CarSingleViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarOwnersRoutingModule {}
