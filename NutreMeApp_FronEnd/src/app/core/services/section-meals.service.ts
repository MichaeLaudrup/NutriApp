import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Aliment, SectionMeal } from "@shared/models";
import { delay, EmptyError, map, Observable, of } from "rxjs";
import { deepCopiesUtils } from "src/app/shared/utils/deep-copies.utils";
import { environment } from "src/environments/environment";
@Injectable({
        providedIn:'root'
})
export class sectionMealsService {
    attachPhotoToSection(sectionId: string, photo: FormData) {
        return this.http.post<{status: string, data: {section: SectionMeal}}>(`${environment.apiUrlBase}/section-meals/${sectionId}`, photo)
    }
    private sectionMeals = [];  
    constructor(private http: HttpClient){}

    public getMealsFromServer(): Observable<SectionMeal[]> {
        return this.http.get<{status: string, data: {sections: SectionMeal[]}}>(`${environment.apiUrlBase}/section-meals`)
            .pipe(map( jsend => jsend.data.sections))
    }

    public addSectionMealToServer( newSectionMeal: SectionMeal): Observable<SectionMeal> {
        return this.http.post<{status:string, data: {section: SectionMeal}}>( `${environment.apiUrlBase}/section-meals`, {...newSectionMeal})
            .pipe( map( jsend => jsend.data.section)) 
    }

    public editSectionMealInServer( id: string, sectionUpdated: SectionMeal): Observable<SectionMeal[]>{
        const index = this.sectionMeals.findIndex( item => item.id === id);
        this.sectionMeals = [...this.sectionMeals.slice(0,index), sectionUpdated, ...this.sectionMeals.slice(index+1, this.sectionMeals.length)]
        return of(this.sectionMeals).pipe(delay(1000)); 
    }

    public deleteSection(id: string): Observable<SectionMeal[]> {
        const index = this.sectionMeals.findIndex( item => item.id === id); 
        this.sectionMeals = [...this.sectionMeals.slice(0,index), ...this.sectionMeals.slice(index+1, this.sectionMeals.length)];
        return of(this.sectionMeals).pipe(delay(1000)); 
    }

    public addMealToServer(sectionId: string, newMeal: Aliment): Observable<Aliment> {

        const indexOfSection = this.sectionMeals.findIndex( (section) => section.id === sectionId); 
        const newMealWithId = {
            ...newMeal,
            id:  Math.ceil(Math.random() * 1000) + ''
        }
        if(indexOfSection === 0 || !!indexOfSection){
            const newSectionMeal: SectionMeal = {
                id: sectionId, 
                ...this.sectionMeals[indexOfSection],
                meals: [
                    ...this.sectionMeals[indexOfSection].meals,
                    newMealWithId
                ]
            }
            this.sectionMeals = [
                ...this.sectionMeals.slice(0,indexOfSection),
                newSectionMeal,
                ...this.sectionMeals.slice(indexOfSection+1, this.sectionMeals.length
            )];
        }
        return of(newMealWithId).pipe(delay(1000)); 
    } 

    public editMealInSection(idSection: string, mealUpdated: Aliment): Observable<{idSec: string, mealUpd: Aliment}> {
        this.sectionMeals =  deepCopiesUtils.copySectionsWithOneMealEdited(this.sectionMeals, idSection, mealUpdated)
        return of({idSec: idSection, mealUpd:mealUpdated}).pipe(delay(1000)); 
    }

    public deleteMealInSection(idSection: string, idMeal: string): Observable<{secId:string, melId:string}>{
        this.sectionMeals = deepCopiesUtils.copySectionsWithOneMealDeleted(this.sectionMeals, idSection, idMeal); 
        return of({secId: idSection, melId: idMeal}).pipe(delay(1000)); 
        
    }
}