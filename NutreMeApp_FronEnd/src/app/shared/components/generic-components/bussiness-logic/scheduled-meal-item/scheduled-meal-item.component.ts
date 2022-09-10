import { Component, Input, OnInit } from '@angular/core';
import { UserInterfaceService } from '@core/services';
import { DeviceMode } from '@shared/enums';
import { Aliment } from '@shared/models';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'scheduled-meal-item',
  templateUrl: './scheduled-meal-item.component.html',
  styleUrls: ['./scheduled-meal-item.component.scss']
})
export class ScheduledMealItemComponent implements OnInit {
  done: boolean = false; 
  expanded: boolean = false; 
  nameFormated:string = ''; 
  @Input('food') food: Aliment; 
  @Input('index') index: number; 

  private destroySuscriptions$: Subject<any> = new Subject()

  constructor( private userInterface: UserInterfaceService) { }

  ngOnInit(): void {
    this.userInterface.deviceMode$.pipe(takeUntil(this.destroySuscriptions$)).subscribe( (device: DeviceMode) => {
      if(device === DeviceMode.ExtraSmall){
        this.nameFormated = this.food.name.slice(0,12) + '...'; 
      }else if(device === DeviceMode.Small){
        this.nameFormated = this.food.name.slice(0,24) + '...'; 
      }else{
        this.nameFormated = this.food.name; 
      }
      
    })
  }

  ngOnDestroy(): void {
    this.destroySuscriptions$.next({})
     this.destroySuscriptions$.unsubscribe()
}

}
