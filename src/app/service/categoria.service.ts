import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn:'root'
})

export class CategorieService{

    url="http://localhost:3000/";
    mycat!: Object;
    constructor(private _http: HttpClient) {}

    /* NUOVA CATEGORIA */
    newCat(cat:FormGroup){
            fetch(this.url+'inserimentoCat',{
                method:'POST',
                headers:{
                    'Content-Type' : 'application/json'
                },
                body:JSON.stringify(cat.value)
            },
          
            )

    };

    /* OTTIENI CATEGORIE */

    getCat(){
        return this._http.get(`${this.url}takeCategoria`)
        
    }

    modifyCat(cat:any){    
        return this._http.put(`${this.url}modifyCategoria`,cat)
        
    }

    deleteCat(cat:any){
        console.log(cat);
        
        return this._http.delete(`${this.url}deleteCategoria/${cat.id}`)
    }
}