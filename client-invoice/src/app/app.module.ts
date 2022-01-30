import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ApiComponent } from './api/http';

import { AppComponent } from './app.component';
import { ListClientComponent } from './pages/page.client-list';
import { AddClientComponent } from './pages/page.add-client';
import { ClientDetailsComponent } from './pages/page.client-detail';
import { AddInvoiceComponent } from './pages/page.add-invoice';

import {AddClientForm} from './form/AddClientForm';
import { AddInvoiceForm } from './form/AddInvoiceForm';


const routes: Routes = [
  // La page d'accueil affichera la liste des tâches
  { path: '', component: ListClientComponent },
  { path:'create', component:AddClientComponent},
  { path: ':id', component: ClientDetailsComponent },
  { path: ':id/invoices/add', component:AddInvoiceComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ListClientComponent,
    AddClientComponent,
    ClientDetailsComponent,
    AddInvoiceComponent,
    AddClientForm,
    AddInvoiceForm
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ApiComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
