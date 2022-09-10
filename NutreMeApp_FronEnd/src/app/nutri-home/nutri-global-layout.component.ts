import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, take, takeUntil } from 'rxjs';
import { UserInterfaceService } from '../core/services/user-interface.service';
import { DeviceMode } from '@shared/enums';
import { typeModalSpecialization } from '../shared/enums/type-modals.enum';
import { sharedFacadeService } from '../shared/store-modules/ngrx-shared/+user-interface/user-interface.facade';

@Component({
  selector: 'app-nutri-home',
  templateUrl: './nutri-global-layout.component.html',
  styleUrls: ['./nutri-global-layout.component.scss']
})
export class NutriGlobalLayoutComponent implements OnInit, OnDestroy {
  DeviceModee = DeviceMode; 
  typeModalSpecialization = typeModalSpecialization; 
  infoModalOpened: boolean = false; 
  createUpdateModalOpened: boolean = false; 
  typeModal: string = ''; 
  destroySuscriptions$: Subject<any> = new Subject(); 
  modalStatus: typeModalSpecialization;
  height: number = 0; 
  deviceMode: DeviceMode; 

  

  constructor( private sharedFacade: sharedFacadeService,
                private userInterfaceService: UserInterfaceService){}
  ngOnInit() {
    this.sharedFacade.modalStatus$.pipe(takeUntil( this.destroySuscriptions$)).subscribe( ( modalStatus: typeModalSpecialization) => {
      this.modalStatus = modalStatus; 
    }); 

    this.userInterfaceService.deviceMode$.pipe( takeUntil( this.destroySuscriptions$)).subscribe( (deviceMode: DeviceMode) => {
      this.deviceMode = deviceMode; 
    })

    this.userInterfaceService.actualHeight$.pipe(takeUntil(this.destroySuscriptions$)).subscribe( (height) => {
      this.height = height; 
    })
  }

  ngOnDestroy(): void {
    this.destroySuscriptions$.next({});
    this.destroySuscriptions$.unsubscribe();  
  }

}
