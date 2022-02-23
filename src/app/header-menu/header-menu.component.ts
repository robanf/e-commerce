import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {
  navigazione =[
    {rotta:"",titolo:"Home"},
    {rotta:"/chisiamo",titolo:"Chi Siamo"},
    {rotta:"/shop",titolo:"Shop"},
    {rotta:"/carrello",titolo:"Carrello"}
  ];

  accesso=[
    {rotta:"/registrazione",titolo:"Registrati"},
    {rotta:"/login",titolo:"Login"},

  ];
  

  constructor(public tservice:LoginService) {

   }

  ngOnInit(): void {
  }


}
