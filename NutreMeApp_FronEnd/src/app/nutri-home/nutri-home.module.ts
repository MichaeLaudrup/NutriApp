import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* MODULOS MIOS */
import { SharedModule } from '../shared/shared.module';

import { NutriHomeRoutingModule } from './nutri-home-routing.module';
import { NutriGlobalLayoutComponent } from './nutri-global-layout.component';
import { StoreModule } from '@ngrx/store';
import { sharedFacadeService } from '../shared/store-modules/ngrx-shared/+user-interface/user-interface.facade';
import { NgRxHomeModule } from '../shared/store-modules/ngrx-home';
import { userLogedGuard } from '../shared/routing-components/guards/auth.guard';



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
