import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnerSingleViewComponent } from './owner-single-view/owner-single-view.component';
import { CarOwnersRoutingModule } from './car-owners-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CarListComponent } from './car-list/car-list.component';
import { CarSingleViewComponent } from './car-single-view/car-single-view.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule  } from '@angular/material/select'; 


const MaterialModules = [
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatSelectModule
]

@NgModule({
  declarations: [
    OwnerListComponent,
    OwnerSingleViewComponent,
    CarListComponent,
    CarSingleViewComponent
  ],
  imports: [
    CommonModule,
    CarOwnersRoutingModule,
    ReactiveFormsModule,
    ...MaterialModules
  ]
})
export class CarOwnersModule { }
