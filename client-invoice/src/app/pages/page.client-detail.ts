import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ApiComponent } from '../api/http';
import { Client } from '../types/client';
import { Invoices } from '../types/invoice';

@Component({
  selector: 'client-detail',
  template: `
  <div *ngIf="client">
  <div class="row text-center Titre"><h1>Fiche de {{client.fullName}}</h1></div>
  <div class="row text-center"><h2>{{client.email}}</h2></div>
  <br>
  <div class="row">
    <div class="col text-center"><button class="btn btn-danger"><a class="butlink" routerLink="/">Retour aux clients</a></button></div>
    <div class="col text-center"><button class="btn btn-success"><a class="butlink" routerLink="/{{id}}/invoices/add">Créer une facture</a></button></div>
  </div>


  <table>
    <tr *ngFor="let invoice of invoices">
       <div class=" row border text-center"><td>{{invoice.amount}} € {{invoice.status}}</td></div>
    </tr>
  </table>





  `,
  styles: ['th {width:50%;} .butlink {color:inherit; text-decoration:none;} .Titre { text-align:center;  background-color:black; color:white;}']
})
export class ClientDetailsComponent {
    id: number;
    invoices:Invoices;
    client: Client;

    constructor(private route:ActivatedRoute,private service : ApiComponent){}

    ngOnInit()
    {
        const id: number = Number(this.route.snapshot.paramMap.get('id'));
        this.id = id;
        this.service.getInvoicesOfClient(id).subscribe(invoices => this.invoices = invoices)
        this.service.findClientById(id).subscribe(clients => this.client = clients[0])
    }

}
