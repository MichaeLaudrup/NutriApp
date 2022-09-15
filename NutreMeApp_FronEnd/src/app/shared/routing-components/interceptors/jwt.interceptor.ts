import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";

@Injectable()
export class JWTInterceptor implements HttpInterceptor {
    constructor(){

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        if(sessionStorage.getItem('JWTtoken') ){
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${sessionStorage.getItem('JWTtoken')}`
                }
            })
        }
        return next.handle(req).pipe( tap( evt => {
            if(evt instanceof HttpResponse){
                if(evt.body && evt.body['status'] && evt.body['status'] === 'success'){
                    if(evt.body.data.token){
                        sessionStorage.setItem('JWTtoken', evt.body.data['token'])
                    }
                }
            }
        })); 
    }
}