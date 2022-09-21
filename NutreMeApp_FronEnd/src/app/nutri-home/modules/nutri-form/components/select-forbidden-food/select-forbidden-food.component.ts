import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataFacadeService } from '@ngrx/ngrx-shared';
import { CarrouselService } from '../../servicios/carrousel.service';

@Component({
  selector: 'app-select-forbidden-food',
  templateUrl: './select-forbidden-food.component.html',
  styleUrls: ['./../../shared/shared-nutri-form.styles.scss','./select-forbidden-food.component.scss']
})
export class SelectForbiddenFoodComponent implements OnInit {

  
  constructor(
    private carrouselService: CarrouselService, 
    private userDataFacadeServices: UserDataFacadeService,
    private router: Router) {
      setTimeout(() => this.carrouselService.setPage(4) , 0); 
    }
  
    ngOnInit(): void {
    }
  }
