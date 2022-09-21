import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataFacadeService } from '@ngrx/ngrx-shared';
import { Alergens } from 'src/app/shared/enums/alergens.enum';
import { CarrouselService } from '../../servicios/carrousel.service';

@Component({
  selector: 'app-select-alergens',
  templateUrl: './select-alergens.component.html',
  styleUrls: ['./../../shared/shared-nutri-form.styles.scss','./select-alergens.component.scss']
})
export class SelectAlergensComponent implements OnInit {
  alergensNames = ['Huevo', 'Pescado', 'Fructosa', 'Gluten', 'Lactosa', 'Frutos secos', 'Marisco', 'Soja']
  alergens = [Alergens.Egg, Alergens.Fish, Alergens.Fructose, Alergens.Gluten, Alergens.Lactose, Alergens.Nuts, Alergens.SeaFood, Alergens.Soy]
  constructor(
    private carrouselService: CarrouselService, 
    private userDataFacadeServices: UserDataFacadeService,
    private router: Router) {
      setTimeout(() => this.carrouselService.setPage(3) , 0); 
    }

  ngOnInit(): void {
  }


}
