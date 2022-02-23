import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform : FormGroup;

  

  constructor(fb : FormBuilder , public tservice: LoginService) {
    this.loginform=fb.group({
      email:['', Validators.required ],
      password:['', Validators.required ]
    })
   }

  ngOnInit(): void {
  }

  login(){
    let url="http://localhost:3000/login/?email="+this.loginform.value.email+"&password="+this.loginform.value.password;

    if (this.loginform.valid) {
      alert('validazione corretta');
      console.table(this.loginform.value);

      fetch(url).then(
        result =>{
            result.json().then( data =>{
                console.log(data);
                
                if(data.result===null){

                  alert("Ricontrolla i dati")
                }else{
                  alert("Sei loggato")
                  this.tservice.setlog();
                  
                }
            }
            );
              
                
            }
    ).catch(
        error => {
            console.log(error);
        }
    ); 


    }else{
      alert('email o password non inserito');
      
    }

  }

}
