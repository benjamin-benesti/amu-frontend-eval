import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiComponent } from '../api/http';
import { Client } from '../types/client';

@Component({
  selector: 'add-invoice',
  template: `
  <h1>Créer une facture pour {{client.fullName}}</h1>
  <add-invoice-form (onNewInvoice)="addInvoice($event)">
  `,
  styles: []
})
export class AddInvoiceComponent {
    client!: Client;

    constructor(private route:ActivatedRoute,private service:ApiComponent,private router:Router){}

   ngOnInit()
   {
       const id: number = Number(this.route.snapshot.paramMap.get('id'));
       this.service.findClientById(id).subscribe(clients => this.client = clients[0])
   }

   addInvoice(message : any)
   {
      this.service.createinvoice(this.client.id,message.amount,message.status).subscribe(()=>this.router.navigate(['/'+this.client.id]));   
   }
}
