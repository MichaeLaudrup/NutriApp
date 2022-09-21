import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { SelectObjectiveSheetComponent } from "./components/select-objective-sheet/select-objective-sheet.component";
import { nutriFormLayout } from "./nutri-form-layout.component";
import { formularioNutricionalRoutingModule } from "./nutri-form-routing.module";
import { FisiologicDataSheetComponent } from './components/fisiologic-data-sheet/fisiologic-data-sheet.component';
import { CarrouselService } from "./servicios/carrousel.service";
import { SelectFeedingTypeComponent } from './components/select-feeding-type/select-feeding-type.component';
import { UserDataFacadeService } from "@ngrx/ngrx-shared";
import { SelectAlergensComponent } from './components/select-alergens/select-alergens.component';
import { SelectForbiddenFoodComponent } from './components/select-forbidden-food/select-forbidden-food.component';

const components = [ nutriFormLayout]; 

@NgModule({
    declarations: [
        components,
        FisiologicDataSheetComponent,
        SelectObjectiveSheetComponent,
        SelectFeedingTypeComponent,
        SelectAlergensComponent,
        SelectForbiddenFoodComponent
    ],
    exports:[
        components
    ],
    imports:[
        CommonModule,
        formularioNutricionalRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ],
    providers: [ CarrouselService, UserDataFacadeService],
})
export class FormularioNutricionalModule {
    
}