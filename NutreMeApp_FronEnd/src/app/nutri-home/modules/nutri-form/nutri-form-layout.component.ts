
import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import {  NavigationEnd ,Router, Event, ActivatedRoute, NavigationStart, ChildrenOutletContexts, RouterOutlet } from "@angular/router";
import { DeviceMode } from "@shared/enums";
import { Subject, takeUntil } from "rxjs";
import { UserInterfaceService } from "src/app/core/services/user-interface.service";
import { sliderAnimations } from "./animations";
import { CarrouselService } from "./servicios/carrousel.service";

type NewType = Subject<any>;

@Component({
    selector: 'nutri-form-layout',
    templateUrl: './nutri-form-layout.component.html',
    styleUrls: ['./nutri-form-layout.component.scss'],
    animations:[ ...sliderAnimations]
})
export class nutriFormLayout implements OnInit, AfterViewInit, OnDestroy {
    actualPage = -1; 
    routes = ['select-objective', 'fisiologic-data']; 
    height = 0; 
    isInMobileMood = false; 
    private destroySuscriptions$: Subject<any> = new Subject<any>(); 
    currentRoute: string = 'none';
    constructor(
        private carrouselService: CarrouselService,
        private changeDetector: ChangeDetectorRef,
        private router: Router,
        private userInterfaceService: UserInterfaceService,
        private activateRoute: ActivatedRoute,
        private contexts: ChildrenOutletContexts){
            
        
        
    }

    ngOnInit(): void {
        this.carrouselService.actualPage$.pipe(takeUntil(this.destroySuscriptions$)).subscribe( (actualPage) => {
            this.actualPage = actualPage; 
        });  
        this.userInterfaceService.actualHeight$.pipe(takeUntil(this.destroySuscriptions$)).subscribe( actualHeight => {
            this.height = actualHeight; 
        });

        this.userInterfaceService.deviceMode$.pipe(takeUntil(this.destroySuscriptions$)).subscribe( deviceMode => {
            if(deviceMode === DeviceMode.Small){
                this.isInMobileMood = true; 
            } 
        })
    }

    ngAfterViewInit(): void {
        this.changeDetector.detectChanges(); 
    }

    ngOnDestroy(): void {
        this.destroySuscriptions$.next({})
        this.destroySuscriptions$.unsubscribe()
    }

    previousPage(){
        if(this.actualPage !== 0){
            this.router.navigate( ['/nutriapp/nutri-form/' +this.routes[this.actualPage-1]])
        }
    }

    nextPage() {
        if(this.actualPage < (this.routes.length - 1)){
            this.router.navigate(['/nutriapp/nutri-form/' +this.routes[this.actualPage+1]])
        }
    }

    processOutlet(event: any, outlet: RouterOutlet){
        this.currentRoute = outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']; 
    }
}