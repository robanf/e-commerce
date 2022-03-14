import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategorieService } from '../service/categoria.service';

@Component({
  selector: 'app-amm-categorie',
  templateUrl: './amm-categorie.component.html',
  styleUrls: ['./amm-categorie.component.css']
})
export class AmmCategorieComponent implements OnInit {
  CreaCat: FormGroup;
  modificaCat: FormGroup;
  myCategorie!: any ;
  deleteCat: FormGroup;

  constructor(fb : FormBuilder, public catservice:CategorieService ) {
    this.CreaCat=fb.group({
      nome:['', Validators.required ],
    });
    this.modificaCat=fb.group({
      id:[''],
      modnome:['', Validators.required ],
    });
    this.deleteCat=fb.group({
      id:[''],
      modnome:[''],
    });

    this.catservice.getCat()
              		.subscribe((result:any) => {
                    console.log(result);
                    this.myCategorie = result.result;
              		});
   
   
   }

  ngOnInit(): void {

  }

  conferma(){
    this.catservice.modifyCat(this.modificaCat.value).subscribe((res)=>{})
  }

  cancella(){
    this.catservice.deleteCat(this.deleteCat.value).subscribe((res)=>{})
  }

}
