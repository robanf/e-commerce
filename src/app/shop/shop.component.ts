import { Component, OnInit } from '@angular/core';
import { LISTAPRODOTTO } from '../dati/dati.Prodotti';
import { Prodotto } from '../model/prodotto.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  prodotti: Prodotto[]= LISTAPRODOTTO

  constructor() { }

  ngOnInit(): void {
  }

}
