import { Component,  OnDestroy,  OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { imcInfoData, kcalHistoryInfoData, mbaInfoData } from '@shared/data';
import { Observable, Subject, takeUntil} from 'rxjs';
import { NutritionTarget } from 'src/app/shared/enums/nutrition-target.enum';
import { FisiologicData } from 'src/app/shared/models/fisiologicData.model';
import { UserDataFacadeService } from 'src/app/shared/store-modules/ngrx-home';



@Component({
  selector: 'app-dashboard-data',
  templateUrl: './dashboard-data.component.html',
  styleUrls: ['./dashboard-data.component.scss']
})
export class DashboardDataComponent implements OnInit, OnDestroy {
  fisiologicData:FisiologicData; 
  objetive: NutritionTarget;
  mba: number = 0;
  mbaWithActivity: number = 0; 
  mbaWithActivityAndObjetive: number = 0;  
  modalsInfo: any = {}; 
  
  private destroySuscriptions$: Subject<any> = new Subject()
  ngOnDestroy(): void {
      this.destroySuscriptions$.next({})
       this.destroySuscriptions$.unsubscribe()
  }
  
  constructor( private userDataFacade: UserDataFacadeService) {
    this.userDataFacade.fisiologicData$.pipe(takeUntil(this.destroySuscriptions$)).subscribe( ( fisiologicData) => {
      this.fisiologicData = fisiologicData; 
    });

    this.userDataFacade.nutritionTarget$.pipe(takeUntil(this.destroySuscriptions$)).subscribe( (objetive) => {
      this.objetive = objetive; 
    })

    
  }
  
  ngOnInit(): void {
    this.setModalInfoData(); 
  }


  public setModalInfoData() {
     this.modalsInfo.mbaInfoData = mbaInfoData; 
     this.modalsInfo.imcInfoData = imcInfoData; 
     this.modalsInfo.kcalHistoryInfoData = kcalHistoryInfoData; 
  }




}
