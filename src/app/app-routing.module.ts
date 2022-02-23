import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmmCategorieComponent } from './amm-categorie/amm-categorie.component';
import { AmmProdottiComponent } from './amm-prodotti/amm-prodotti.component';
import { AmministrazioneComponent } from './amministrazione/amministrazione.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path:"", component:HomeComponent },
  {path:"chisiamo", component:ChiSiamoComponent },
  {path:"shop", component:ShopComponent },
  {path:"carrello", component:CarrelloComponent },
  {path:"registrazione", component:RegistrazioneComponent },
  {path:"login", component:LoginComponent },
  {path:"amministrazione", component:AmministrazioneComponent },
  {path:"ammProdotti", component:AmmProdottiComponent },
  {path:"ammCategorie", component:AmmCategorieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
