import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Header } from './../Header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonListComponent } from './../pokemon-list/pokemon-list.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, Header, PokemonListComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
