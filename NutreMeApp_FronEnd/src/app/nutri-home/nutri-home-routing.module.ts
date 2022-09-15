import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { userLogedGuard } from '../shared/routing-components/guards/auth.guard';
import { UserDataResolver } from '../shared/routing-components/resolvers/user-data.resolver';
import { NutriGlobalLayoutComponent } from './nutri-global-layout.component';

const routes: Routes = [
  {
    path: '', component: NutriGlobalLayoutComponent,
    canActivate: [userLogedGuard],
    resolve: {
      userData: UserDataResolver
    },
    children: [ {path:'nutri-form', loadChildren: () => import('./modules/nutri-form/nutri-form.module').then( m => m.FormularioNutricionalModule)},
                {path:'nutri-data', loadChildren: () => import('./modules/dashboard-data/dashboard-data.module').then( m => m.DashboardDataModule)},
                {path:'nutri-store', loadChildren: () => import('./modules/store-room/store-room.module').then(m => m.StoreRoomModule)},
                {path: 'nutri-diet', loadChildren: () => import('./modules/diet/diet.module').then(m => m.DietModule)},
                {path:'**', redirectTo: 'nutri-form'}]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NutriHomeRoutingModule { }
