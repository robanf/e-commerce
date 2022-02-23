import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { ShopComponent } from './shop/shop.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AmministrazioneComponent } from './amministrazione/amministrazione.component';
import { AmmProdottiComponent } from './amm-prodotti/amm-prodotti.component';
import { AmmCategorieComponent } from './amm-categorie/amm-categorie.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderMenuComponent,
    ChiSiamoComponent,
    ShopComponent,
    CarrelloComponent,
    RegistrazioneComponent,
    LoginComponent,
    AmministrazioneComponent,
    AmmProdottiComponent,
    AmmCategorieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
