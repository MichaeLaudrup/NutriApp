import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { Observable, tap } from "rxjs";

@Injectable()
export class JWTInterceptor implements HttpInterceptor {
    constructor(private cookieService: CookieService){

    }


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        if(this.cookieService.get('JWTtoken')){
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.cookieService.get('JWTtoken')}`
                }
            })
        }
        return next.handle(req).pipe( tap( evt => {
            if(evt instanceof HttpResponse){
                if(evt.body && evt.body['status'] && evt.body['status'] === 'success'){
                    if(evt.body.data.token){
                        this.cookieService.set('JWTtoken', evt.body.data['token'])
                    }
                }
            }
        })); 
    }
}