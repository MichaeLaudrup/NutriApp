import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { sharedFacadeService } from "./+user-interface/user-interface.facade";
import { sharedReducer } from "./+user-interface/user-interface.reducer";
import { userEffects } from "./+users/users.effects";
import { usersReducer } from "./+users/users.reducer";

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('shared',  {
            modals: sharedReducer,
            user: usersReducer
        }),
        EffectsModule.forFeature([ userEffects])
    ]
})
export class NgRxSharedModule{
     static forRoot(): ModuleWithProviders<NgRxSharedModule> {
        return {
            ngModule: NgRxSharedModule,
            providers: [sharedFacadeService]
        }
     }
}