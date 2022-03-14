import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategorieService } from '../service/categoria.service';
import { ProdottiService } from '../service/prodotti.service';

@Component({
  selector: 'app-amm-prodotti',
  templateUrl: './amm-prodotti.component.html',
  styleUrls: ['./amm-prodotti.component.css']
})
export class AmmProdottiComponent implements OnInit {

  insProd:FormGroup;
  formProdMod:FormGroup;
  formProdDelete:FormGroup
  myCategorie!: any ;
  myProdotti!: any ;
  myModProd: any;
  attivo:boolean=false;

  constructor(fb : FormBuilder,public ProdService:ProdottiService,public CatService:CategorieService) {
    this.insProd=fb.group({
      nome:['', Validators.required ],
      img:['', Validators.required ],
      prezzo:['', Validators.required ],
      categoria:['', Validators.required ],
      descrizione:['', Validators.required ],
    });
    this.formProdMod=fb.group({
      _id:['', Validators.required ],
      nome:['', Validators.required ],
      img:['', Validators.required ],
      prezzo:['', Validators.required ],
      categoria:['', Validators.required ],
      descrizione:['', Validators.required ],
    });
    this.formProdDelete=fb.group({
      categoria:['']
    })

    /* Prendo le mie categorie */
    this.CatService.getCat()
    .subscribe((result:any) => {
      console.log(result);
      this.myCategorie = result.result;
    });

    /* prendo i miei prodotti */
    this.ProdService.getProd()
    .subscribe((result:any) => {
      console.log(result);
      this.myProdotti = result.result;
    });
   }

  ngOnInit(): void {

  }

  inserisciProd(){
      console.log(this.insProd.value);
      this.ProdService.inserimentoProd(this.insProd.value).subscribe((res)=>{})
  }

  eliminaprod(id:any){
    this.ProdService.eliminaProd(id).subscribe((res)=>{})
  }

  eliminAllaprod(){
    this.ProdService.eliminaAllProd(this.formProdDelete.value.categoria).subscribe((res)=>{})
  }

  attivaMod(id:any){
    this.ProdService.takeOneProd(id).subscribe((result:any) => {
      console.log(result);
      this.formProdMod.patchValue(result.result) ;
    });
    this.attivo=true;
  }

  chiudimodifica(){
    this.attivo=false;
    this.myModProd="";
  }

  modifyprod(){
    this.ProdService.modifyProd(this.formProdMod.value).subscribe((res)=>{})
  }
}
