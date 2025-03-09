import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { HttpClientModule } from '@angular/common/http';


import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ApartmentsComponent } from './Apartments/apartments/apartments.component';
import { ApartmentsByResidenceComponent } from './Apartments/apartments-by-residence/apartments-by-residence.component';
import { AddApartmentComponent } from './Apartments/add-apartment/add-apartment.component';
import { ResidencesComponent } from './Residencess/residences/residences.component';
import { ResidenceDetailsComponent } from './Residencess/residence-details/residence-details.component';
import { AddResidenceComponent } from './Residencess/add-residence/add-residence.component';
import { UpdateResidenceComponent } from './Residencess/update-residence/update-residence.component';

@NgModule({
  declarations: [
    AppComponent,
    ResidencesComponent,
    ErrorComponent,
    ResidenceDetailsComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ApartmentsComponent,
    ApartmentsByResidenceComponent,
    AddApartmentComponent,
    AddResidenceComponent,
    UpdateResidenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
