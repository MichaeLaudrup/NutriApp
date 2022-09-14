import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { usersFacade } from "@ngrx/ngrx-shared";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class userLogedGuard implements CanActivate, CanActivateChild{
    constructor(private userFacade: usersFacade, private router: Router){

    }
    canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(environment.allGuardsDesactivated) return true; 
        return this.userFacade.$user.pipe( map( user => {
            if(user === undefined){
                return this.router.createUrlTree(['login']);
            }else{
                return true
            }
        })); 
    }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(environment.allGuardsDesactivated) return true; 
        return this.userFacade.$user.pipe( map( user => {
            if(user === undefined){
                return this.router.createUrlTree(['login']);
            }else{
                return true
            }
        })); 
    }

}