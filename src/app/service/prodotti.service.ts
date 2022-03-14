import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn:'root'
})

export class ProdottiService{
    url="http://localhost:3000/";

    constructor(private _http: HttpClient) {}

    getProd(){
        return this._http.get(`${this.url}takeProdotti`)
        
    }

    inserimentoProd(prod:any){
        prod.img=prod.img.slice(12);
        
        return this._http.post(`${this.url}insProdotti`,prod)
    }
    eliminaProd(id:any){
        console.log(id);
        
        return this._http.delete(`${this.url}deleteProdottoonly/${id}`)
    }

    eliminaAllProd(categoria:any){
        return this._http.delete(`${this.url}deleteProdottiCategoria/${categoria}`)
    }

    modifyProd(prod:any){
        console.log(prod);
        
        return this._http.put(`${this.url}modifyProdotto/${prod._id}`,prod)
    }

    takeOneProd(id:any){
        return this._http.get(`${this.url}takeOneProdotto/${id}`)
    }
}