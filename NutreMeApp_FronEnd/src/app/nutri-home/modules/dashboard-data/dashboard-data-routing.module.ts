import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardDataComponent } from './dashboard-data.component';

const routes: Routes = [
    {path:'', component: DashboardDataComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardDataRoutingModule {

}
