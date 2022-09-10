import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class CarrouselService{
    actualPage = new BehaviorSubject<number>(0); 
    actualPage$ = this.actualPage.asObservable(); 

    setPage(newPage: number){
        this.actualPage.next(newPage); 
 
    }
}