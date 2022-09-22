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
  selectedAlergens: string[]= []; 
  
  constructor(
    private carrouselService: CarrouselService, 
    private userDataFacadeServices: UserDataFacadeService,
    private router: Router) {
      setTimeout(() => this.carrouselService.setPage(3) , 0); 
    }

  ngOnInit(): void {
  }

  toggleSelectedAlergen(clickedAlergen: Alergens){
    if(this.selectedAlergens.includes(clickedAlergen)){
      let index = this.selectedAlergens.findIndex( alergen => alergen === clickedAlergen);
      this.selectedAlergens.splice(index,1)
    }else{
      this.selectedAlergens.push(clickedAlergen.toString());
    }

    console.log(this.selectedAlergens)
  }

  nextPage(){
    this.router.navigate(['/nutriapp/nutri-form/select-forbidden-food'])
  }


}
