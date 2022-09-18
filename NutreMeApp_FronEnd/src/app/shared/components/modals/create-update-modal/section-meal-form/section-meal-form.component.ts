import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {inputImgPaths } from '@shared/constants'; 
import { Subject, takeUntil, timeout } from 'rxjs';
import { SectionMeal } from '@shared/models';
import { ModalService } from '../../modal.service';
import { MealSectionsFacade } from '@ngrx/ngrx-section-meals';
@Component({
  selector: 'section-meal-form',
  templateUrl: './section-meal-form.component.html',
  styleUrls: ['./section-meal-form.component.scss']
})
export class CreationOfSectionMealComponent implements OnInit {
  inputImgOptions = inputImgPaths; 
  sectionMealForm: FormGroup; 
  @Input() editMode: boolean = false;
  @Input() actualSection : SectionMeal; 
  @Input() sectionToEdit: SectionMeal; 
  file: File; 
  @Output() showSpinner: EventEmitter<boolean> = new EventEmitter<boolean>(); 
  @Output() showFeedBack: EventEmitter<string> = new EventEmitter<string>(); 

  private destroySuscriptions$: Subject<any> = new Subject(); 

  constructor(
    private mealsSectionFacade: MealSectionsFacade,
    private modalService: ModalService
  ) {
    this.sectionMealForm = new FormGroup({
      sectionName: new FormControl((this.editMode) ? this.actualSection.name : '', Validators.required),
      sectionPath: new FormControl((this.editMode) ? this.actualSection.imgPath : '')
    }); 
   }

  ngOnInit(): void {
    this.mealsSectionFacade.feedbackListener$.pipe( takeUntil( this.destroySuscriptions$)).subscribe((feedBack) => {
      if(feedBack.showFeedBack){
        this.modalService.showFeedBackMessage(feedBack.showFeedBack, feedBack.feedBackMessage); 
        setTimeout( () => {
          this.mealsSectionFacade.resetFeedback(); 
          this.modalService.hideModalNow(true); 
        }, 2000)
      }
    });

    this.mealsSectionFacade.isLoading$.pipe(takeUntil(this.destroySuscriptions$)).subscribe((isLoading) => {
      if(isLoading){
        this.modalService.showLoadingSpinner(true); 
      }
    })
  }

  ngOnDestroy(): void {
    this.destroySuscriptions$.next({})
    this.destroySuscriptions$.unsubscribe();
  }

  processForm(){
    const newSectionMeal: SectionMeal= {
      name: this.sectionMealForm.get('sectionName').value,
      imgPath: this.sectionMealForm.get('sectionPath').value,
      meals: (this.editMode) ? [...this.sectionToEdit.meals] : [],
      _id: (this.editMode) ? this.sectionToEdit._id : ''
    }; 
    if(this.editMode){
      this.mealsSectionFacade.editSectionMeal(this.sectionToEdit._id, newSectionMeal); 

    }else{
      let formData = undefined; 
      if(this.file){
        formData = new FormData(); 
        formData.append('photo', this.file)
      }
      this.mealsSectionFacade.addNewSection(newSectionMeal, formData);
    }
  }

  updateFileToUpload(file: File){
    this.file = file; 
  }

}
