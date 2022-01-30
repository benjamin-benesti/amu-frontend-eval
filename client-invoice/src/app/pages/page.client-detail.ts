import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ApiComponent } from '../api/http';
import { Client } from '../types/client';
import { Invoices } from '../types/invoice';

@Component({
  selector: 'client-detail',
  template: `
  <div *ngIf="client">
  <h1>Fiche de {{client.fullName}}</h1>
  <h2>{{client.email}}</h2>
  <br>
  <button><a routerLink="/">Retour aux clients</a></button>
  <table>
    <tr *ngFor="let invoice of invoices">
    <td>{{invoice.amount}} €</td>
    <td>{{invoice.status}}</td>
    </tr>
  </table>
  <button><a routerLink="/{{id}}/invoices/add">Créer une facture</a></button>
</div>

  `,
  styles: []
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
