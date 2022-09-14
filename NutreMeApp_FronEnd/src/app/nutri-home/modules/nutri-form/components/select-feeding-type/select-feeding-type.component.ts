import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NutritionTarget } from '@shared/enums';
import { usersFacade } from '@shared/ngrx-shared';
import { UserDataFacadeService } from 'src/app/shared/store-modules/ngrx-home';
import { CarrouselService } from '../../servicios/carrousel.service';

@Component({
  selector: 'app-select-feeding-type',
  templateUrl: './select-feeding-type.component.html',
  styleUrls: ['./../../shared/shared-nutri-form.styles.scss','./select-feeding-type.component.scss']
})
export class SelectFeedingTypeComponent implements OnInit {
  NutritionTarget = NutritionTarget;
  constructor(
    private carrouselService: CarrouselService, private userFacadeServices: UserDataFacadeService, private router: Router) {
      setTimeout(() => this.carrouselService.setPage(2) , 0); 
    }

  ngOnInit(): void {
  }

  selectObjective(target: NutritionTarget): void {
    this.userFacadeServices.setObjective(target); 
    this.router.navigate(['/nutriapp/nutri-form/fisiologic-data']); 
  }

}
