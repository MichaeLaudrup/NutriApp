import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ConnectFormDirective } from './directives/connect-form.directive';
import { GenericComponentsModule } from './components/generic-components/generic-components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ActionsBarComponent } from './components/actions-bar/actions-bar.component';
import { ModalsModule } from './components/modals/modal.module';
import { ShortStringWithPipe } from './pipes/short-string-with.pipe';
import { toTagSvgIconPipe } from './pipes/tagsPipe.pipe';
import { AsideBarMenuComponent } from './components/asidebar-menu/asidebar-menu.component';
import { RouterModule } from '@angular/router';
import { GetRoutePipe } from './pipes/get-route.pipe';
import { LoginRegisterComponent } from './components/auth-section/login-register.component';
import { NgRxSharedModule } from '../store-modules/ngrx-shared/ngrx-shared.module';
import { MealSectionsFacade } from '@ngrx/ngrx-section-meals';
import { usersFacade } from '@ngrx/ngrx-shared';


const components = [
  HeaderComponent,
  FooterComponent,
  ConnectFormDirective,
  ActionsBarComponent,
  toTagSvgIconPipe,
  AsideBarMenuComponent,
  GetRoutePipe,
  LoginRegisterComponent,
  ShortStringWithPipe,
]

@NgModule({
  declarations: [
    components,
  ],
  imports: [
    CommonModule,
    RouterModule,
    GenericComponentsModule,
    ReactiveFormsModule,
    ModalsModule,
    NgRxSharedModule.forRoot()

  ],
  exports: [
    components,
    GenericComponentsModule,
    ModalsModule
  ],

  providers: [
    MealSectionsFacade,
    usersFacade
  ]
})
export class SharedModule {

}
