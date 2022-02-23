import { Component, OnInit } from '@angular/core';
import { LISTAPRODOTTO } from '../dati/dati.Prodotti';
import { Prodotto } from '../model/prodotto.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  prodotti: Prodotto[]= LISTAPRODOTTO

  constructor() { }

  ngOnInit(): void {
  }

}
