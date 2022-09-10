import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DietLayoutComponent } from './diet-layout/diet-layout.component';

const routes: Routes = [
  {path: '', component: DietLayoutComponent, children: [
    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DietRoutingModule { }
