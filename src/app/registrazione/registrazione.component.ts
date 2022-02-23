import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {
  
  url="http://localhost:3000/";
  
  mioform : FormGroup;
  submitted = false;

  constructor(fb : FormBuilder) { 
    this.mioform=fb.group({
      ragionesociale:['qui inserisco la ragione sociale', [Validators.required,Validators.minLength(4)]],
      tipologia:['qui inserisco la tipologia',Validators.required],
      partitaiva:[],
      codicefiscale:['qui inserisco il codice fiscale',Validators.required],
      nazione:['qui inserisco la nazione',Validators.required],
      via:['qui inserisco la via',Validators.required],
      cap:['qui inserisco il cap',Validators.required],
      comune:['qui inserisco il comune',Validators.required],
      provincia:['qui inserisco la provincia',Validators.required],
      telefonofisso:[],
      cellulare:['qui inserisco il cellulare',Validators.required],
      email:['qui inserisco la mail',Validators.required],
      username:['qui inserisco la nomignolo',Validators.required],
      password:['qui inserisco la parola segreta',Validators.required],
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    if (this.mioform.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.mioform.value);
    }else{
      console.log('errore');
      
    }
    
    fetch(this.url+'inserimento',{
      method:'POST',
      headers:{
          'Content-Type' : 'application/json'
      },
      body:JSON.stringify(this.mioform.value)
  },

  )
  }

}
