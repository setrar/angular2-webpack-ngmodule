import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';

import { AdminComponent }          from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageCrisesComponent }   from './manage-crises/manage-crises.component';
import { ManageHeroesComponent }   from './manage-heroes/manage-heroes.component';

import { AdminRoutingModule }      from './admin-routing.module';
import { Http } from '@angular/http';
import { HitService } from '../shared/hit.service'; 

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpModule,
    JsonpModule
  ],
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    ManageCrisesComponent,
    ManageHeroesComponent
  ],
  providers:[
    HitService
  ]
})
export class AdminModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/