import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApiRequestService } from 'src/app/core/services/APIResquests.service';
import { NutritionTarget } from 'src/app/shared/enums/nutrition-target.enum';
import { FisiologicData } from 'src/app/shared/models/fisiologicData.model';
@Component({
  selector: 'asidebar-menu',
  templateUrl: './asidebar-menu.component.html',
  styleUrls: ['./asidebar-menu.component.scss']
})
export class AsideBarMenuComponent implements OnInit {
  NutritionTarget = NutritionTarget; 
  objetivo$ ?: Observable<NutritionTarget>; 
  datos_fisiologicos$ ?: Observable<FisiologicData>; 
  resultado?: string; 
  alimento: string = ''; 
  isMenuOpened: boolean = false; 
  constructor(private apiService: ApiRequestService) {
    
   }

  ngOnInit(): void {
  }



  searchShow(){
    this.apiService.getFoodData(this.alimento).subscribe( (responseData) => {
      this.resultado = responseData; 
    })
  }

}
