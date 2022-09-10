import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "@shared/models";
import { map, Observable } from "rxjs";
import { Jsend } from "src/app/shared/models/jsend.model";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn:'root'
})
export class authService  {
    constructor( private http: HttpClient){
    }

    public signUp(newUser: User) : Observable<User>{
        return this.http.post<Jsend>(`${environment.apiUrlBase}/users/signup`, {...newUser}).pipe( map( signUpResponde => signUpResponde.data.user))
    }

    public logIn(newUser: User) : Observable<User>{
        return this.http.post<Jsend>(`${environment.apiUrlBase}/users/login`, {...newUser}).pipe( map( signUpResponde => signUpResponde.data.user))
    }


}