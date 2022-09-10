import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { UserDataFacadeService } from "./+user-data/user-data.facade";
import { userDataReducer } from "./+user-data/user-data.reducer";


@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('home-store',  {
           'user-data': userDataReducer
        })
    ],

    providers:[ UserDataFacadeService]
})
export class NgRxHomeModule {
    static forRoot(): ModuleWithProviders<NgRxHomeModule> {
        return {
            ngModule: NgRxHomeModule,
            providers: [UserDataFacadeService]
        }
    }
}