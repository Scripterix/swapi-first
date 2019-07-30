

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DemoMaterialModule } from './material-module';

import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { MaterialtwoModule } from './materialtwo';


import { UserComponent } from './components/user/user.component';
import { AboutComponent } from './components/about/about.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';





@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    HomeComponent,
    AutocompleteComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    MaterialtwoModule,
    AppRoutingModule,
    NgxPaginationModule,
    MatNativeDateModule,
    DemoMaterialModule,



  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
