import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* MODULOS MIOS */
import { SharedModule } from '../shared/shared.module';

import { NutriHomeRoutingModule } from './nutri-home-routing.module';
import { NutriGlobalLayoutComponent } from './nutri-global-layout.component';
import { StoreModule } from '@ngrx/store';
import { userLogedGuard } from '../shared/routing-components/guards/auth.guard';
import { sharedFacadeService } from '@ngrx/ngrx-shared';
import { NgRxHomeModule } from '../store-modules/ngrx-home';



@NgModule({
  declarations: [
    NutriGlobalLayoutComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    NutriHomeRoutingModule,
    NgRxHomeModule
  ],
  providers: [
    sharedFacadeService,
    userLogedGuard
  ]
})
export class NutriHomeModule { }
