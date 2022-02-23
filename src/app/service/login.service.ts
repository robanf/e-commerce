import { Injectable } from "@angular/core";


@Injectable({
    providedIn:'root'
})

export class LoginService{

    loggato : boolean =false;


    setlog(){
        this.loggato=true;
    }

    unsetlog(){
        this.loggato=false;
    }

    getlog(){
        return this.loggato
    }
}