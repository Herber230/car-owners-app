import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnerSingleViewComponent } from './owner-single-view/owner-single-view.component';
import { CarOwnersRoutingModule } from './car-owners-routing.module';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    OwnerListComponent,
    OwnerSingleViewComponent
  ],
  imports: [
    CommonModule,
    CarOwnersRoutingModule,
    MaterialModule
  ]
})
export class CarOwnersModule { }
