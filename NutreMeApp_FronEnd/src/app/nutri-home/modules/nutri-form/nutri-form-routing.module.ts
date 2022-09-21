import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FisiologicDataSheetComponent } from "./components/fisiologic-data-sheet/fisiologic-data-sheet.component";
import { SelectAlergensComponent } from "./components/select-alergens/select-alergens.component";
import { SelectFeedingTypeComponent } from "./components/select-feeding-type/select-feeding-type.component";
import { SelectForbiddenFoodComponent } from "./components/select-forbidden-food/select-forbidden-food.component";
import { SelectObjectiveSheetComponent } from "./components/select-objective-sheet/select-objective-sheet.component";
import { nutriFormLayout } from "./nutri-form-layout.component";


const routes : Routes = [
    /* En esta ruta path: '' por tema de lazy-load y modularizacion aunque no se aprecie en este codigo
       realmente se esta haciendo referencia a "nutri-form" */
    { path:'',
      component: nutriFormLayout ,
      children: [
        {path:'select-objective', component: SelectObjectiveSheetComponent, data: {animation: 'select-objective'}},
        {path:'fisiologic-data', component: FisiologicDataSheetComponent, data: {animation: 'fisiologic-data'}},
        {path:'feeding-type', component: SelectFeedingTypeComponent, data: {animation: 'feeding-type'}},
        {path:'select-alergens', component: SelectAlergensComponent, data: {animation: 'select-alergens'}},
        {path:'select-forbidden-food', component: SelectForbiddenFoodComponent, data: {animation: 'select-forbidden-food'}},
        {path: '**', redirectTo: 'select-objective'}
      ]}
]; 
@NgModule({
    imports:[
      RouterModule.forChild(routes)
    ],
    exports:[
      RouterModule
    ]
})
export class formularioNutricionalRoutingModule {

}